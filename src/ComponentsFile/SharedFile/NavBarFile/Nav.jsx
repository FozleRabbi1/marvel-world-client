import { Transition } from "@headlessui/react";
import { useState } from "react";
import ActiveLink from "../../ActiveLinkFile/ActiveLink";
import "./Nav.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className=" ">

                <div className=" hidden md:block ">
                    <div className="nav-herder flex justify-between   py-3 bg-slate-100 sm:px-4 lg:px-4 ">
                        <h2> Free Returns and Free Shipping</h2>
                        <div className="contact flex  ">
                            <p>++00 123 456 789</p>
                            <p className="">email@dynamic.com</p>
                            <p>Account</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex w-full justify-between items-center">
                            <div className="flex-shrink-0">
                                <h2>logo</h2>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-1 text-center">
                                    <ActiveLink to={"/"} className=" px-3  py-2 rounded-md text-sm font-medium">
                                        Home
                                    </ActiveLink>

                                    <ActiveLink to={"/allToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        All Toys
                                    </ActiveLink>

                                    <ActiveLink to={"/myToys"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        My Toys
                                    </ActiveLink>

                                    <ActiveLink to={"/register"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        Register
                                    </ActiveLink>

                                    <ActiveLink to={"/login"} className=" px-3 py-2 rounded-md text-sm font-medium">
                                        Login
                                    </ActiveLink>




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
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>

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
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


            {/* <div className="divider m-0 p-0"></div>  */}
            <hr />
        </div>
    );
};

export default Nav;