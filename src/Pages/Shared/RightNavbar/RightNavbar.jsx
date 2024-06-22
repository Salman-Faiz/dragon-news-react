import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const RightNavbar = () => {
    return (
        <div className="p-3">
            {/* Login with */}
            <div className="space-y-3">
                <h1 className="text-2xl  font-semibold">Login with</h1>

                <button className="btn btn-outline w-full ">
                    <FaGoogle className="text-xl" /> Login with Google </button>

                <button className="btn btn-outline w-full ">
                    <FaGithub className="text-xl" /> Login with Github </button>

            </div>

            {/* find us on */}
            <div className="border border-1 my-10 bg-white">
                <h1 className="text-2xl p-3 font-semibold">Find us on</h1>
                <div className="border flex gap-2 py-1 px-3">

                    <FaFacebook className="text-xl mt-1" /> <h2 className="pt-1">Facebook</h2>
                </div>
                <div className="border flex gap-2 py-1 px-3">
                    <FaTwitter className="text-xl mt-1" /> <h2 className="pt-1">X</h2>
                </div>
                <div className="border flex gap-2 py-1 px-3">

                    <FaInstagram className="text-xl mt-1" /> <h2 className="pt-1">Instagram</h2>
                </div>

            </div>
        </div>
    );
};

export default RightNavbar;