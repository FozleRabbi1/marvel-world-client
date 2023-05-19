import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(user)

    // useEffect(()=>{
    //     setLoading(false)
    // },[])
    
    if (loading) {
        // return <p>loading...........</p>
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to={"/login"} state={{ from: location }} replace ></Navigate>
    }
};

export default Private;