import {  FaGithub, FaGoogle } from "react-icons/fa";
const LoginWith = () => {
    return (


        <div className="space-y-3">
            <h1 className="text-2xl  font-semibold">Login with</h1>

            <button className="btn btn-outline w-full ">
                <FaGoogle className="text-xl" /> Login with Google </button>

            <button className="btn btn-outline w-full ">
                <FaGithub className="text-xl" /> Login with Github </button>

        </div>
    );
};

export default LoginWith;