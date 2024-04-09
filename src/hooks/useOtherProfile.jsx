import axios from "axios"
import { useEffect } from "react"
import { USER_API_END } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getOtherUsers } from "../redux/userSlice"

const useOtherProfile = async (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const FetchOtherProfile = async () => {
            try {
                const res = await axios.get(`${USER_API_END}/otheruser/${id}`, {
                    withCredentials: true
                })
                console.log(res)
                dispatch(getOtherUsers(res?.data?.otherUser));
            } catch (error) {
                console.log(error)
            }
        }
        FetchOtherProfile()
    }, [])
}

export default useOtherProfile;