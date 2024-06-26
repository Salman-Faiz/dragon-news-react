import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";
import MainContent from "./MainContent";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
               
                    <LeftNavbar></LeftNavbar>
               
                <div className="md:col-span-2">
                    <MainContent news={news}></MainContent>
                </div>
              
                    <RightNavbar></RightNavbar>
               
            </div>

        </div>
    );
};

export default Home;