import Navbar from "../Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="border md:col-span-2">
                    <h3>coming soon</h3>
                </div>
                <div className="">
                    <RightNavbar></RightNavbar>
                </div>
            </div>

        </div>
    );
};

export default Home;