
function RightSide() {
  return (
    <div className="bg-slate-200 p-3 w-full">
      <div className="">
        <input className="w-full rounded-lg" type="text" name="search" placeholder="Search" id="" />
      </div>
      <div className=" mt-6">
        <h3>who to follow</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="avatar">
            <div className="w-16 mr-2 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h4>patel</h4>
            <h5>patel@123</h5>
          </div>
          <button className="bg-slate-600 px-4 py-2 rounded-xl mt-3 text-white font-semibold">Profile</button>
        </div>
      </div>
    </div>
  )
}

export default RightSide