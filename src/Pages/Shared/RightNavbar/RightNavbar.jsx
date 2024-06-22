
import LoginWith from "./LoginWith";
import FindUsOn from "./FindUsOn";
import QZone from "./QZone";
import bg1 from '../../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div className="p-3">
            {/* Login with */}
            <LoginWith></LoginWith>

            {/* find us on */}
            <FindUsOn></FindUsOn>

            {/* Q-zone */}
            <QZone></QZone>
            {/* create newspaper */}
            <div className="my-10 text-center " >
                <h2 className="text-3xl">Create An Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn bg-pink-500">Learn More</button>
            </div>

        </div>
    );
};

export default RightNavbar;