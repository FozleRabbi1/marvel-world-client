import { Link, useNavigate } from 'react-router-dom';
import registerAnimation from '../LottiReactFile/RegisterAnimatio.json';
import Lottie from 'lottie-react'
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SharedFile/SocialLogin/SocialLogin';
import useTitle from '../DynamicTitleFile/useTitle';

const Register = () => {
    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('')

    useTitle("Register")

    const handelRegisterForm = (e) => {
        e.preventDefault();
        setError("")
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Register Success-Full',
                    showConfirmButton: false,
                    timer: 1500
                  })
                updateUserData(name, photoUrl, email)
                    .then(() => {
                        logOut()
                        navigate("/login")
                    })

            }).catch(err => setError(err.message) )
        form.reset()


    }
    return (
        <div className=''>

            <div className="hero py-10">
                <div className="hero-content h-96 mt-16 flex-col-2 lg:flex-row px-10  ">
                    <div className=" mt-6  flex justify-center ">
                        <Lottie className='w-10/12' animationData={registerAnimation}></Lottie>

                    </div>

                    <div className="card flex-shrink-0 w-5/12  shadow-2xl mt-24 mb-5 ">

                        <form className='w-12/12' onSubmit={handelRegisterForm} action="">
                            <div className="card-body">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                {
                                    error && <p className='text-red-500 text-sm'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <input className='btn btn-outline btn-success' type="submit" value="Register" />
                                </div>
                            </div>
                        </form>
                        <span className='ps-8 -mt-5 pb-5 text-sm text-gray-500'>Already Have An Account Go To <Link to={"/login"} className='text-black text-lg' >Login</Link></span>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;