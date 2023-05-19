import Lottie from 'lottie-react'
import loginAnimatio from '../LottiReactFile/LoginAnimation.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import SocialLogin from '../SharedFile/SocialLogin/SocialLogin';
import useTitle from '../DynamicTitleFile/useTitle';

const Login = () => {
    useTitle("Login")
    const [error, setError] = useState("")
    const { loginUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    console.log(from)



    const handelLoginForm = (e) => {
        e.preventDefault();
        setError("")
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                navigate(from, {replace : true})
            })
            .catch(err => setError(err.message))

        form.reset()


    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content h-96 mt-16 flex-col lg:flex-row px-10 ">
                    <div className=" ">
                        <Lottie className='w-10/12' animationData={loginAnimatio}></Lottie>

                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

                        <form className='pt-5' onSubmit={handelLoginForm} action="">
                            <div className="card-body -mt-10">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                {
                                    error && <p className='text-red-500 text-sm' >{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <input className='btn btn-outline btn-success' type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        <span className='ps-8 -mt-5 pb-5 text-sm text-gray-500'>Do Not Have An Account Go To <Link to={"/register"} className='text-black text-lg' >register</Link></span>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;