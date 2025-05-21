import React from "react";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaTelegramPlane,
    FaDiscord,
    FaTwitter,
    FaYoutube,
    FaCode,
} from "react-icons/fa";

const Footer = () => {
    const solutions = [
        { name: "Campus Branding", link: "https://sdietxam.com/employers/campus-branding" },
        { name: "Talent Sourcing", link: "https://sdietxam.com/employers/talent-sourcing" },
        { name: "Engagement Programs", link: "https://sdietxam.com/employers/engagement-programs" },
        { name: "Skill Assessments", link: "https://sdietxam.com/employers/skill-assessments" },
    ];

    const products = [
        { name: "Technology Platform", link: "https://sdietxam.com/virtual-event-platform" },
        { name: "Quizzing / Assessments", link: "https://sdietxam.com/online-assessment-platform" },
        { name: "Online Hackathons / Coding", link: "https://sdietxam.com/organize-hackathon-virtual-coding-platform-and-assessment-tests" },
        { name: "Business Simulation Games", link: "https://sdietxam.com/business-simulation-games/business-strategy" },
    ];

    const participate = [
        { name: "Competitions & Challenges", link: "https://sdietxam.com/competitions" },
        { name: "Quizzes", link: "https://sdietxam.com/quizzes" },
        { name: "Hackathons", link: "https://sdietxam.com/hackathons" },
        { name: "Workshops & Webinars", link: "https://sdietxam.com/workshops" },
    ];

    const apply = [
        { name: "Internships", link: "https://sdietxam.com/internships" },
        { name: "Jobs", link: "https://sdietxam.com/jobs" },
        { name: "Scholarships", link: "https://sdietxam.com/scholarships" },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Left Section */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                        <img
                            src={logo}
                            alt="logo"
                            className="mb-1 h-30 w-auto"
                        />
                        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Stay Connected</h3>
                        <div className="space-y-3">
                            <a href="mailto:sales@sdietxam.com" className="flex items-center text-gray-300 hover:text-white group">
                                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-2 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
                                    <IoMailOutline className="text-white" />
                                </span>
                                sales@sdietxam.com
                            </a>
                            <a href="tel:9958748482" className="flex items-center text-gray-300 hover:text-white group">
                                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-2 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
                                    <MdLocalPhone className="text-white" />
                                </span>
                                +91-9958748482&nbsp;<span className="text-sm text-gray-400">(Mon to Fri, 9 AM to 6 PM)</span>
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-xl font-bold mb-5 relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Our Solutions</span>
                            <span className="block h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {solutions.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 block">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-xl font-bold mb-5 relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Our Products</span>
                            <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {products.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 block capitalize">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-5 relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">Follow Us</span>
                            <span className="block h-1 w-16 bg-gradient-to-r from-pink-500 to-red-500 mt-2 rounded-full"></span>
                        </h4>
                        <div className="grid grid-cols-5 gap-3">
                            <a href="https://www.instagram.com/sdietxam.world/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <AiFillInstagram className="text-white text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/company/sdietxam" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaLinkedinIn className="text-white text-xl" />
                            </a>
                            <a href="https://www.facebook.com/Sdietxam.world" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaFacebookF className="text-white text-xl" />
                            </a>
                            <a href="https://twitter.com/Sdietxam_World" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaTwitter className="text-white text-xl" />
                            </a>
                            <a href="https://www.youtube.com/c/Sdietxam_World" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaYoutube className="text-white text-xl" />
                            </a>
                        </div>
                        
                        {/* Newsletter subscription */}
                        <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Subscribe to our newsletter</h5>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="w-full bg-gray-900 text-white rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
                                />
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-3 rounded-r-md">
                                    <IoMdSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line with gradient */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8"></div>

                {/* Enhanced "Built by Prince" section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        © 2024 SDIETXAM. All rights reserved.
                    </p>
                    
                    {/* Beautifully styled "Built by Prince" */}
                    <div className="group relative">
                        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-full px-6 py-3 shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
                            <p className="text-lg flex items-center justify-center">
                                <span className="mr-2 text-gray-300">Built with</span>
                                <AiFillHeart className="text-xl text-red-500 animate-pulse mx-2" />
                                <span className="mr-2 text-gray-300">by</span>
                                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-indigo-500 transition-all">
                                    Prince
                                </span>
                                <FaCode className="ml-3 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                            </p>
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity"></div>
                    </div>
                    
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;