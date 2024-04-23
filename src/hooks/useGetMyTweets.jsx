import axios from "axios"
import { useEffect } from "react"
import { TWEET_API_END } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { getRefresh, getTweets } from "../redux/tweetSlice"

const useGetMyTweets = async (id) => {
    const dispatch = useDispatch()
    const { refresh, isActive } = useSelector(store => store.tweet)

    const FetchMyTweets = async () => {
        try {
            const res = await axios.get(`${TWEET_API_END}/alltweets/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log("tweet result: ", res)
            dispatch(getTweets(res?.data?.tweets));
        } catch (error) {
            console.log(error)
        }
    }
    const followingHandler = async () => {
        try {
            // const id = user?._id;
            const res = await axios.get(`${TWEET_API_END}/follwingtweets/${id}`, {
                withCredentials: true
            })
            console.log(res)
            dispatch(getTweets(res?.data?.tweets))
            // dispatch(getRefresh())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (isActive) {
            FetchMyTweets()
        }
        else {
            followingHandler()
        }
    }, [id, dispatch, refresh, isActive])
}

export default useGetMyTweets;