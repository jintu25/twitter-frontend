import { Link } from "react-router-dom"
import { IoMdSettings } from "react-icons/io";
import { FaImages } from "react-icons/fa";

const CreatePost = () => {
    return (
        <div className="">
            <ul className="flex justify-between items-center py-6 px-4">
                <li><Link>For You</Link></li>
                <li><Link>Following</Link></li>
                <li><Link><IoMdSettings /></Link></li>
            </ul>
            <div className="bg-white py-4 px-6">
                <div className="flex border-b-2 border-slate-200 pb-4">
                    <div className="avatar">
                        <div className="w-16 mr-2 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <input className="w-full text-lg outline-none bg-none px-2 py-3 border-none" type="text" placeholder="What is Happing?!" />
                </div>
                <div className="flex justify-between mt-4">
                    <div>
                        <span className="text-2xl"><FaImages /></span>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-sm">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
