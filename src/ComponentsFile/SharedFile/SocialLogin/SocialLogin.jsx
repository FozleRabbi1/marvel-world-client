import { useContext } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const googleLoginFun = () => {
        googleLogin()
            .then(() => {
                navigate(from, { replace: true })
            })
    }


    return (
        <div>

            <div className="divider -mt-4">OR</div>
            <div className="w-full flex justify-center pb-3">

                <img onClick={googleLoginFun} className='w-12 h-12 rounded-full m-0 p-0 hover:cursor-pointer hover:shadow-lg duration-700' src="https://i.ibb.co/gZXDLHQ/d2abd662597191-5a9589b09ddf5-removebg-preview.png" alt="" />

            </div>

        </div>
    );
};

export default SocialLogin;