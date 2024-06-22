import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-100 rounded-lg py-4 my-4">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={200} >
                <p className="ps-10">I can be a React component, multiple React components, or just <Link className="text-red-500">some text</Link>.</p>
                <p className="ps-10">I can be a React component, multiple React components, or just <Link className="text-red-500">some text</Link>.</p>
                <p className="ps-10">I can be a React component, multiple React components, or just <Link className="text-red-500">some text</Link>.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;