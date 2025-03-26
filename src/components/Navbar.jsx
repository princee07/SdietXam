import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import {
    FaBook,
    FaCode,
    FaTrophy,
    FaChalkboardTeacher,
    FaBriefcase
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:h-28">
                {/* Left Section */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-16 w-auto lg:h-36 object-contain"
                        />
                    </NavLink>
                </div>

                {/* Center Section (Hidden on small screens) */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaBook className="text-xl lg:text-3xl" />
                        <span className="text-xs lg:text-sm font-semibold">learn</span>
                    </NavLink>

                    <NavLink
                        to="/practice"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaCode className="text-xl lg:text-3xl" />
                        <span className="text-xs lg:text-sm font-semibold">practice</span>
                    </NavLink>

                    <NavLink
                        to="/compete"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaTrophy className="text-xl lg:text-3xl" />
                        <span className="text-xs lg:text-sm font-semibold">compete</span>
                    </NavLink>

                    <NavLink
                        to="/mentor"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaChalkboardTeacher className="text-xl lg:text-3xl" />
                        <span className="text-xs lg:text-sm font-semibold">mentorship</span>
                    </NavLink>

                    <NavLink
                        to="/job-portal"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                        }
                    >
                        <FaBriefcase className="text-xl lg:text-3xl" />
                        <span className="text-xs lg:text-sm font-semibold">jobs</span>
                    </NavLink>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 lg:gap-4">
                    <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-blue-700">
                        <span>Host</span>
                    </button>
                    <button className="hidden md:flex items-center gap-2 bg-yellow-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-yellow-600">
                        <span>Login</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-gray-600 text-3xl">☰</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Hidden by default, shown when isOpen=true) */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-white border-t border-gray-200 py-4 space-y-4">
                    <NavLink
                        to="/courses"
                        className="flex items-center px-4 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaBook className="mr-2" />
                        Learn
                    </NavLink>

                    <NavLink
                        to="/practice"
                        className="flex items-center px-4 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaCode className="mr-2" />
                        Practice
                    </NavLink>

                    <NavLink
                        to="/compete"
                        className="flex items-center px-4 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTrophy className="mr-2" />
                        Compete
                    </NavLink>

                    <NavLink
                        to="/mentor"
                        className="flex items-center px-4 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaChalkboardTeacher className="mr-2" />
                        Mentorship
                    </NavLink>

                    <NavLink
                        to="/job-portal"
                        className="flex items-center px-4 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaBriefcase className="mr-2" />
                        Jobs
                    </NavLink>

                    {/* Mobile Buttons */}
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
                        Host
                    </button>
                    <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
