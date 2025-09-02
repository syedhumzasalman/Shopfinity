import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <div className="bg-teal-700 text-white">

                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm">
                    {/* Left Side: Phone & Email */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p className="hover:underline">
                            📞 (021) 11-11-Shopfinity (24273)
                        </p>
                        <p className="hover:underline hidden sm:block">
                            ✉️ customercare@Shopfinity.pk
                        </p>
                    </div>

                    {/* Right Side: Account & Cart */}
                    <div className="flex items-center gap-3 mt-2 md:mt-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-bold" : "text-white-600"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/AllProducts"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-bold" : "text-white-600"
                            }
                        >
                            All Products
                        </NavLink>

                        <NavLink
                            to="/AboutUs"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-bold" : "text-white-600"
                            }
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            to="/ContactUs"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-bold" : "text-white-600"
                            }
                        >
                            Contact Us
                        </NavLink>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar