import { FaRegComment } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

function Tweet() {
    return (
        <div>
            <div className="flex items-start py-12">
                <div className="avatar py-2">
                    <div className="w-16 mr-2 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <h4 className="mr-2 font-semibold text-lg">Jintu paul</h4>
                        <p className=" text-slate-500 mr-2">jintu@developer</p>
                        <span className="text-slate-400">4h</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ratione esse incidunt accusantium saepe laudantium cumque, non nobis nesciunt minus nulla, fuga natus expedita repudiandae. Similique aut nostrum dolorem possimus quae, eum excepturi quaerat at rem cum quam eius recusandae quidem enim quas quisquam suscipit vel laborum debitis, velit facilis voluptatibus delectus! Quibusdam laudantium omnis, est quo dolorem nam quod ex expedita sit, eius enim saepe deserunt ab, rerum tempora non odit quos ipsam. Sunt nulla eveniet suscipit labore ut.
                    </p>
                    <img className="w-full h-80 my-4" src="https://media.istockphoto.com/id/477110708/photo/weather-forecast.webp?b=1&s=170667a&w=0&k=20&c=cJDnRfarWTRVrTRGBv82aQUYmkgZp3FTCSLKLXdrcCU=" alt="image" />
                    <ul className="flex justify-between">
                        <li className="flex gap-2 items-center"><span className="text-2xl font-semibold"><FaRegComment /> </span><span className="text-lg">0</span></li>
                        <li className="flex gap-2 items-center"><span className="text-2xl font-semibold"><FaRegHeart /> </span> <span className="text-lg">0</span></li> 
                        <li className="flex gap-2 items-center"><span className="text-2xl font-semibold"><CiBookmark /> </span> <span className="text-lg">0</span></li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tweet
