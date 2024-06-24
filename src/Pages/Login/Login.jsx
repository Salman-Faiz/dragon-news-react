import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h4 className="text-center text-3xl font-bold pt-10 pb-5">Login now</h4>
      
                <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="p-3">Do not have an account? <Link to={'/register'} className="text-blue-800">Register</Link></p>
                    </form>
                 
                    
                </div>
         
        </div>
    );
};

export default Login;