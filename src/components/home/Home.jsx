import Feed from "./Feed";
import RightSide from "./RightSide";

const Home = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-between">
            <div className=" col-span-6">
                <Feed/>
            </div>
            <div className=" hidden lg:col-span-2">
                <RightSide/>
            </div>
        </div>
        </div>
    );
};

export default Home;