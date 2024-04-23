import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import logo from '../../assets/white logo.png'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { USER_API_END } from "../../utils/constant";
import toast from "react-hot-toast"
import { getOtherUsers, getProfile, getUser } from "../../redux/userSlice";
function Layout() {

  const { user } = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END}/logout`, {
        withCredentials: true
      })
      dispatch(getUser(null))
      dispatch(getOtherUsers(null))
      dispatch(getProfile(null))
      navigate("/login")
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>  {/* Added closing tag */}
      <div className="">
        <div className="drawer lg:drawer-open">  {/* Consider conditional class application */}
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col p-4">
            {/* Page content here */}
            <Outlet />
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Dashboard
            </label>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-8 w-80 border-r-2 border-b-slate-600 h-full mr-6 bg-[#0c0c13ec]">
              <>
                {/* Admin routes can go here */}
                <li>
                  <img className="w-20 mb-4" src={logo} alt="twitter logo" />
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <IoHome />
                    </span>{" "}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <FaSearch />
                    </span>{" "}
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrollstudents"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <IoMdNotifications />
                    </span>{" "}
                    Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/profile/${user?._id}`}
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <FaRegUser />
                    </span>{" "}
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <FaBookmark />
                    </span>{" "}
                    Bookmarks
                  </NavLink>
                </li>
                <li onClick={logoutHandler}>
                  <NavLink
                    to="/dashboard/allusers"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <IoMdLogOut />
                    </span>{" "}
                    Logout
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className="text-lg font-semibold text-slate-200 flex justify-center bg-blue-500 hover:bg-blue-400 duration-300 mt-4 px-3 py-1"
                  >
                    Post
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Layout
