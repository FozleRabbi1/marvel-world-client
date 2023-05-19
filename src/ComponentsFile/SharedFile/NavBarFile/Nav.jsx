import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import ActiveLink from "../../ActiveLinkFile/ActiveLink";
import "./Nav.css";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import { FaPhone } from 'react-icons/fa';
// import { AiTwotoneMail } from "react-icons/im";
import { FaEnvelopeOpen, FaUserAlt } from "react-icons/fa";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const logOutFun = () => {
        logOut()
            .then(() => { })
    }
    // console.log(user)

    return (
        // <div className="sticky top-0 z-50">
        <div className="sticky top-0 z-50" >
            <nav>

                <div className=" hidden md:block ">
                    <div className="nav-herder flex justify-between items-center   py-1 bg-slate-100 sm:px-4 lg:px-4 ">
                        <h2> Free Returns and Free Shipping</h2>
                        <div className="contact flex items-center  ">
                            <p className="flex items-center"> <i className="me-2"> <FaPhone></FaPhone> </i>  ++00 123 456 789</p>
                            <p className="flex items-center"> <FaEnvelopeOpen FaEnvelopeOpen className="me-2"></FaEnvelopeOpen> {
                                user ? `${user.email}` : "user@gmail.com"
                            } </p>

                            <p>
                                {
                                    user ? <img title={user.displayName} className="h-10 w-10 rounded-full" src={user.photoURL} alt="" /> : <FaUserAlt className="h-10 w-10 p-1 rounded-full"></FaUserAlt>
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex w-full justify-between items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="w-12 h-12" src="https://i.ibb.co/RHCcM70/toy.png" alt="" />
                                <h2 className="ms-2 font-extrabold text-2xl tracking-widest">Kidlo</h2>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-1 text-center">
                                    <ActiveLink to={"/"} className=" px-3  py-2 rounded-md text-sm font-medium">
                                        Home
                                    </ActiveLink>

                                    <ActiveLink to={"/allToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        All Toys
                                    </ActiveLink>


                                    {
                                        user && <>
                                            <ActiveLink to={"/myToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                                My Toys
                                            </ActiveLink>
                                            <ActiveLink to={"/addedToyes"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                                Add Toyes
                                            </ActiveLink>
                                        </>
                                    }

                                    <ActiveLink to={"/register"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        Register
                                    </ActiveLink>
                                    {
                                        user ?
                                            <>
                                                <button onClick={logOutFun} className=" px-3 py-2 rounded-md text-md">
                                                    LogOut
                                                </button>
                                            </> :
                                            <ActiveLink to={"/login"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                                Login
                                            </ActiveLink>
                                    }




                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 flex flex-col pb-3 space-y-1 sm:px-3">
                                <ActiveLink to={"/"} className=" px-3  py-2 rounded-md text-sm font-medium">
                                    Home
                                </ActiveLink>

                                <ActiveLink to={"/allToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                    All Toys
                                </ActiveLink>


                                {
                                    user && <>
                                        <ActiveLink to={"/myToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                            My Toys
                                        </ActiveLink>
                                        <ActiveLink to={"/addedToyes"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                            Add Toyes
                                        </ActiveLink>
                                    </>
                                }

                                <ActiveLink to={"/register"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                    Register
                                </ActiveLink>
                                {
                                    user ?
                                        <>
                                            <button onClick={logOutFun} className=" px-3 py-2 rounded-md text-md">
                                                LogOut
                                            </button>
                                        </> :
                                        <ActiveLink to={"/login"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                            Login
                                        </ActiveLink>
                                }

                                <div className=" ">
                                    <div className="nav-herder flex flex-col  py-3  sm:px-4 lg:px-4 ">
                                        <h2 className="text-center"> Free Returns and Free Shipping</h2>
                                        <div className="contact flex justify-center  ">
                                            <p>++00 123 456 789</p>
                                            <p className="">email@dynamic.com</p>
                                            <p>Account</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact flex items-center  ">
                                    {/* <p> */}
                                        {
                                            user ? <img title={user.displayName} className=" mx-auto h-10 w-10 rounded-full" src={user.photoURL} alt="" /> : <FaUserAlt className="h-10 w-10 p-1 rounded-full"></FaUserAlt>
                                        }
                                    {/* </p> */}
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


            {/* <div className="divider m-0 p-0"></div>  */}
            <hr />
        </div>
        // </div>
    );
};

export default Nav;