import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";

const Main = () => {
    return (
        <div className=" max-w-screen-xl  xl:mx-auto  ">

            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;