import React from "react";
import logo from "../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBook, FaCode, FaTrophy, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center h-28 px-4">
                {/* Left Section */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-36 w-auto object-contain" // Increased logo height
                        />
                    </NavLink>
                </div>

                {/* Center Section */}
                <div className="flex items-center gap-8">
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaBook className="text-3xl" />
                        <span className="text-sm font-semibold">learn</span>
                    </NavLink>

                    <NavLink
                        to="/practice"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaCode className="text-3xl" />
                        <span className="text-sm font-semibold">practice</span>
                    </NavLink>

                    <NavLink
                        to="/compete"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaTrophy className="text-3xl" />
                        <span className="text-sm font-semibold">compete</span>
                    </NavLink>

                    <NavLink
                        to="/mentor"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaChalkboardTeacher className="text-3xl" />
                        <span className="text-sm font-semibold">mentorship</span>
                    </NavLink>

                    <NavLink
                        to="/job-portal"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaBriefcase className="text-3xl" />
                        <span className="text-sm font-semibold">jobs</span>
                    </NavLink>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-blue-700">
                        <span>Host</span>
                    </button>
                    <button className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-yellow-600">
                        <span>Login</span>
                    </button>
                    <button className="p-3">
                        <span className="text-gray-600 text-3xl">☰</span> {/* Menu Icon */}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
