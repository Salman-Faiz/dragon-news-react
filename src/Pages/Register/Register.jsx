import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
    const HandleRegisterSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
                    <form onSubmit={HandleRegisterSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Photo Url</span>
                            </label>
                            <input type="text" name="Photo-url" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">register</button>
                        </div>
                        <p>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                    </form>
                    

                </div>
            </div>
        </div>
    );
};

export default Register;