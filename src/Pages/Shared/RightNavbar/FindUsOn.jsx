import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUsOn = () => {
    return (

        <div className=" my-10 bg-white">
            <h1 className="text-2xl  py-2 mb-2 font-semibold">Find us on</h1>
            <div className="border border-1  rounded-md">
                <div className="border flex gap-2 py-2 px-3 items-center">

                    <FaFacebook className="text-xl " /> <h2 className="">Facebook</h2>
                </div>
                <div className="border flex gap-2 py-2 px-3 items-center">
                    <FaTwitter className="text-xl " /> <h2 className="">X</h2>
                </div>
                <div className="border flex gap-2 py-2 px-3 items-center">

                    <FaInstagram className="text-xl " /> <h2 className="">Instagram</h2>
                </div>
            </div>


        </div>

    );
};

export default FindUsOn;