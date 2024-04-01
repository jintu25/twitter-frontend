import { NavLink, Outlet } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import logo from '../../assets/white logo.png'

function Layout() {

  return (
    <div>
      <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5 px-2 md:py-10 md:px-6 ">
          {/* Page content here */}
          <Outlet/>
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
                {/* admin ra ja ja dekbe  */}
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
                    </span>
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
                    </span>
                    Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <FaRegUser />
                    </span>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                        <FaBookmark/>
                      {/* <FaUtensils></FaUtensils> */}
                    </span>
                    Bookmarks
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className="text-lg font-semibold text-slate-200 flex"
                  >
                    <span>
                      <IoMdLogOut />
                    </span>
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
