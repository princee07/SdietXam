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
} from "react-icons/fa";

const Footer = () => {
    const solutions = [
        { name: "Campus Branding", link: "https://sdietxam.com/employers/campus-branding" },
        { name: "Talent Sourcing", link: "https://sdietxam.com/employers/talent-sourcing" },
        { name: "Engagement Programs", link: "https://sdietxam.com/employers/engagement-programs" },
        { name: "Skill Assessments", link: "https://sdietxam.com/employers/skill-assessments" },

    ];

    const products = [
        { name: "technology platform", link: "https://sdietxam.com/virtual-event-platform" },

        { name: "quizzing / assessments", link: "https://sdietxam.com/online-assessment-platform" },
        { name: "online hackathons / coding", link: "https://sdietxam.com/organize-hackathon-virtual-coding-platform-and-assessment-tests" },
        { name: "business simulation games", link: "https://sdietxam.com/business-simulation-games/business-strategy" },
    ];

    const participate = [
        { name: "competitions & challenges", link: "https://sdietxam.com/competitions" },
        { name: "quizzes", link: "https://sdietxam.com/quizzes" },
        { name: "hackathons", link: "https://sdietxam.com/hackathons" },
        { name: "workshops & webinars", link: "https://sdietxam.com/workshops" },
        { name: "conferences", link: "https://sdietxam.com/conferences" },
        { name: "cultural events", link: "https://sdietxam.com/creative-cultural-events" },
        { name: "college festivals", link: "https://sdietxam.com/college-fests" },
    ];

    const apply = [
        { name: "internships", link: "https://sdietxam.com/internships" },
        { name: "jobs", link: "https://sdietxam.com/jobs" },
        { name: "scholarships", link: "https://sdietxam.com/scholarships" },
    ];

    const learn = [
        { name: "courses", link: "https://sdietxam.com/blog-articles" },
        { name: "articles", link: "https://sdietxam.com/blog-articles" },
        { name: "workshops", link: "https://sdietxam.com/workshops" },
        { name: "technopedia", link: "https://sdietxam.com/technopedia" },
    ];

    const practice = [
        { name: "MCQ mock tests", link: "https://sdietxam.com/courses/mocks" },
        { name: "Code & Ace Hiring assessments", link: "https://sdietxam.com/coding/practice" },
        { name: "100-Day of Coding sprint", link: "https://sdietxam.com/coding/100-day-of-coding-sprint-339" },
    ];

    const properties = [
        { name: "Sdietxam Awards 2023", link: "https://sdietxam.com/awards/2023" },
        { name: "Sdietxam Campus Employer Branding Report 2022", link: "https://sdietxam.com/campus-employer-branding-report-2022" },
        { name: "Education Loan EMI Calculator", link: "https://sdietxam.com/tools/education-loan-emi-calculator" },
        { name: "Sdietxam Igniters Club", link: "https://sdietxam.com/sdietxam-igniters-club" },
        { name: "Online Quizzing Festival", link: "https://sdietxam.com/online-quizzing-festival" },
        { name: "Online Hackathon Festival", link: "https://sdietxam.com/online-hackathon-festival" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Left Section */}
                    <div>
                       
                       
                        <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
                        <div className="space-y-2">
                            <a href="mailto:sales@sdietxam.com" className="flex items-center text-gray-400 hover:text-white">
                                <IoMailOutline className="mr-2" />
                                sales@sdietxam.com
                            </a>
                            <a href="tel:9958748482" className="flex items-center text-gray-400 hover:text-white">
                                <MdLocalPhone className="mr-2" />
                                +91-9958748482&nbsp;<span className="text-sm">(Mon to Fri, 9 AM to 6 PM)</span>
                            </a>
                            <img
                            src={logo}
                            alt="logo"
                            className="mb-4 h-30 w-auto"
                        />
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
                        <ul className="space-y-2">
                            {solutions.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-gray-400 hover:text-white">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Products</h4>
                        <ul className="space-y-2">
                            {products.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-gray-400 hover:text-white">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/sdietxam.world/" target="_blank" rel="noreferrer">
                                <AiFillInstagram className="text-2xl hover:text-pink-500" />
                            </a>
                            <a href="https://www.linkedin.com/company/sdietxam" target="_blank" rel="noreferrer">
                                <FaLinkedinIn className="text-2xl hover:text-blue-500" />
                            </a>
                            <a href="https://www.facebook.com/Sdietxam.world" target="_blank" rel="noreferrer">
                                <FaFacebookF className="text-2xl hover:text-blue-600" />
                            </a>
                            <a href="https://twitter.com/Sdietxam_World" target="_blank" rel="noreferrer">
                                <FaTwitter className="text-2xl hover:text-blue-400" />
                            </a>
                            <a href="https://www.youtube.com/c/Sdietxam_World" target="_blank" rel="noreferrer">
                                <FaYoutube className="text-2xl hover:text-red-500" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-4 text-center"> {/* Reduced margin */}
                    <p className="text-sm text-gray-400">
                        Build By <AiFillHeart className="inline text-red-500" /> Prince.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;