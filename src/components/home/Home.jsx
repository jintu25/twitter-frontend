import Feed from "./Feed";
import RightSide from "./RightSide";

const Home = () => {
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