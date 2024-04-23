import { Link } from "react-router-dom"
import { IoMdSettings } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { useState } from "react";
import { TWEET_API_END } from "../../utils/constant";
import axios from "axios"
import toast from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux"
import { getIsActive, getRefresh } from "../../redux/tweetSlice";

const CreatePost = () => {
    const [description, setDescription] = useState('');
    const { user } = useSelector(store => store.user)
    const { isActive } = useSelector(store => store.tweet)
    const dispatch = useDispatch()


    const handlePost = async () => {
        try {
            const response = await axios.post(`${TWEET_API_END}/create`, { description, id: user?._id }, {
                withCredentials: true,
            })
            dispatch(getRefresh())
            if (response.data.success) {
                toast.success("Post new tweet")
                // Optionally handle success, e.g., clear the form
                setDescription('');
            }

            else {
                // Handle error
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Failed to create post', error);
        }
    };

    const forYouHandler = () => {
        dispatch(getIsActive(true))

    }
    const followingHandler = async () => {
        dispatch(getIsActive(false))
    }


    return (
        <div className="">
            <div className=" border-slate-100 py-2 border-y-2 grid grid-cols-2 justify-between items-center mb-6 px-4">
                <div>
                    <button onClick={forYouHandler} className={`${isActive ? ' border-b-4 border-blue-600 bg-gray-700 bg-opacity-25 ' : ''} text-slate-600 w-full text-lg font-semibold p-3`}>For You</button>
                </div>
                <div>
                    <button
                        onClick={followingHandler}
                        className={`${!isActive ? ' border-b-4 border-blue-600 bg-gray-700 bg-opacity-25 ' : ''} text-slate-600 w-full text-lg font-semibold p-3`}
                    >
                        Following
                    </button>
                </div>
            </div>
            <div className="bg-white py-4 px-6">
                <div className="flex border-b-2 border-slate-200 pb-4">
                    <div className="avatar">
                        <div className="w-16 mr-2 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <input
                        className="w-full text-lg outline-none bg-none px-2 py-3 border-none"
                        type="text"
                        placeholder="What is Happening?!"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        <span className="text-2xl"><FaImages /></span>
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-sm"
                            onClick={handlePost}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
