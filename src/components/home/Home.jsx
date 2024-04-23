import { useEffect } from "react";
import useGetMyTweets from "../../hooks/useGetMyTweets";
import Feed from "./Feed";
import RightSide from "./RightSide";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const { user } = useSelector(store => store.user)
    useGetMyTweets(user?._id)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])

    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-9 justify-between">
            <div className=" col-span-6">
                <Feed/>
            </div>
                <div className="hidden lg:col-span-3 lg:flex px-3">
                <RightSide/>
            </div>
        </div>
        </div>
    );
};

export default Home;