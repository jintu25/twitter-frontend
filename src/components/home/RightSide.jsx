import useOtherProfile from "../../hooks/useOtherProfile"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

function RightSide() {

  const { user, otherUsers } = useSelector(store => store.user)
  useOtherProfile(user?._id)

  return (
    <div className="bg-slate-200 p-3 w-full">
      <div className="">
        <input className="w-full rounded-lg px-2 py-3" type="text" name="search" placeholder="Search" id="" />
      </div>
      <div className=" mt-6">
        <h3 className="text-2xl font-semibold font-serif text-slate-700">who to follow</h3>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user._id} className="flex justify-between items-center mt-4">
                <div className="avatar">
                  <div className="w-16 mr-2 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div>
                  <h4>{user?.name}</h4>
                  <h5>{user?.username}</h5>
                </div>
                <Link to={`/profile/${user?._id}`}>
                  <button className="bg-slate-600 px-4 py-2 rounded-xl mt-3 text-white font-semibold">Profile</button>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RightSide