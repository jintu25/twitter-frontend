import { FaRegComment } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END, timeSince } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh } from "../../redux/tweetSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'

function Tweet({ tweet }) {
    const { description, like, createdAt } = tweet;
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const [isLiked, setIsLiked] = useState(like?.includes(user?._id)); // Initial like state based on user ID in like array

    const handleLikeOrDislike = async (id) => {
        try {
            const response = await axios.put(
                `${TWEET_API_END}/like/${id}`,
                { id: user?._id },
                { withCredentials: true }
            );
            console.log(response);
            setIsLiked(!isLiked); // Update local state immediately for UI feedback
            dispatch(getRefresh()); // Trigger tweet refresh action
            toast.success(response.data.message);
        } catch (error) {
            console.error("Failed to toggle like/dislike:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    // delete tweet function

    const handleDeleteTweet = async (tweetId) => {
        if (user?._id !== tweet.userId) {
            // Not the tweet owner, prevent deletion
            return;
        }

        const confirmation = await Swal.fire({
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await axios.delete(`${TWEET_API_END}/delete/${tweetId}`, {
                    withCredentials: true,
                });
                console.log(response);
                dispatch(getRefresh()); // Trigger tweet refresh action
                toast.success(response.data.message);
            } catch (error) {
                console.error("Failed to delete tweet:", error);
                toast.error("An error occurred. Please try again later.");
            }
        }
    };


    return (
        <div>
            <div className="flex items-start py-12">
                <div className="avatar py-2">
                    <div className="w-16 mr-2 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <h4 className="mr-2 font-semibold text-lg">{tweet?.userDetails[0]?.name}</h4>
                        <p className="text-slate-500 mr-2">{tweet?.userDetails[0]?.username}</p>
                        <span className="text-slate-400">{timeSince(createdAt)}</span>
                    </div>
                    <p className="mb-2">{description}</p>
                    {/* <img className="w-full h-80 my-4" src="https://media.istockphoto.com/id/477110708/photo/weather-forecast.webp?b=1&s=170667a&w=0&k=20&c=cJDnRfarWTRVrTRGBv82aQUYmkgZp3FTCSLKLXdrcCU=" alt="image" /> */}
                    <ul className="flex gap-12 justify-between">
                        <li className="flex gap-2 items-center">
                            <span className="text-2xl font-semibold"><FaRegComment /> </span>
                            <span className="text-lg">0</span>
                        </li>
                        <button onClick={() => handleLikeOrDislike(tweet._id)} className="flex gap-2 items-center">
                            <span className="text-2xl font-semibold">
                                {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                            </span>
                            <span className="text-lg">{like?.length}</span>
                        </button>
                        <li className="flex gap-2 items-center">
                            <span className="text-2xl font-semibold"><CiBookmark /> </span>
                            <span className="text-lg">0</span>
                        </li>

                        <button onClick={() => handleDeleteTweet(tweet._id)} className="flex gap-2 items-center">
                            {
                                user?._id === tweet?.userId && (
                                    <span className="text-2xl font-semibold hover:bg-red-400 hover:text-white transition-shadow duration-300 w-10 h-10 rounded-full flex justify-center items-center">
                                        {<FaRegTrashCan />}
                                    </span>
                                )
                            }
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tweet;
