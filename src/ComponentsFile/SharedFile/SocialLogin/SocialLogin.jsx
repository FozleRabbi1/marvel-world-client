import { useContext } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const googleLoginFun = () =>{
        googleLogin()
        .then(()=>{})
    }


    return (
        <div>

            <div className="divider -mt-4">OR</div>
            <div className="w-full flex justify-center pb-3">

               <img onClick={googleLoginFun} className='w-12 h-12 rounded-full m-0 p-0' src="https://i.ibb.co/gZXDLHQ/d2abd662597191-5a9589b09ddf5-removebg-preview.png" alt="" />

            </div>

        </div>
    );
};

export default SocialLogin;