import axios from "axios"
import { useEffect } from "react"
import { USER_API_END } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getProfile } from "../redux/userSlice"

const useProfile = async (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const FetchProfile = async () => {
            try {
                const res = await axios.get(`${USER_API_END}/profile/${id}`, {
                    withCredentials: true
                })
                dispatch(getProfile(res?.data?.user));
            } catch (error) {
                console.log(error)
            }
        }
        FetchProfile()
    }, [])
}

export default useProfile;