import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '@smastrom/react-rating/style.css'

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])

    return (
        <div className=" max-w-screen-xl  xl:mx-auto font-serif  ">

            <Nav></Nav>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Main;