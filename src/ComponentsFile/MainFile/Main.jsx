import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
    useEffect(()=>{
        AOS.init({duration : 1500})
    },[])

    return (
        <div className=" max-w-screen-xl  xl:mx-auto font-serif  ">

            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;