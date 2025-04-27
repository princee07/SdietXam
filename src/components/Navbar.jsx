import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBook, FaCode, FaTrophy, FaChalkboardTeacher, FaBullhorn, FaStickyNote } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useAuth } from "../context/AuthContext";
import LoginSignupModal from "./LoginSignupModal";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:h-28">
        {/* Left Section */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-16 w-auto lg:h-36 object-contain" />
          </NavLink>
        </div>

        {/* Center Section */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            { to: "/courses", icon: <FaBook />, label: "Learn" },
            { to: "/practice", icon: <FaCode />, label: "Practice" },
            { to: "/compete", icon: <FaTrophy />, label: "Compete" },
            { to: "/mentor", icon: <FaChalkboardTeacher />, label: "Mentorship" },
            { to: "/exam-updates", icon: <FaBullhorn />, label: "Exam Update" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
              }
            >
              <span className="text-xl lg:text-3xl">{item.icon}</span>
              <span className="text-xs lg:text-sm font-semibold">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {currentUser && currentUser.role === "host" ? (
            <>
              {/* Host-specific NavLinks */}
              <NavLink
                to="/create-quiz"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaBook className="text-xl" />
                <span>Quiz</span>
              </NavLink>
              <NavLink
                to="/notes"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <FaStickyNote className="text-xl" />
                <span>Notes</span>
              </NavLink>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/Host" className="hidden md:flex items-center gap-2 bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-blue-600">
                Host
              </NavLink>
              <button onClick={openModal} className="hidden md:flex items-center gap-2 bg-yellow-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-yellow-600">
                <span>Login</span>
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="text-gray-600 text-3xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white border-t border-gray-200 py-4 space-y-4">
          <NavLink to="/courses" className="flex items-center px-4 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
            <FaBook className="mr-2" /> Learn
          </NavLink>
          <NavLink to="/practice" className="flex items-center px-4 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
            <FaCode className="mr-2" /> Practice
          </NavLink>
          <NavLink to="/compete" className="flex items-center px-4 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
            <FaTrophy className="mr-2" /> Compete
          </NavLink>
          <NavLink to="/mentor" className="flex items-center px-4 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
            <FaChalkboardTeacher className="mr-2" /> Mentorship
          </NavLink>
          <NavLink to="/exam-updates" className="flex items-center px-4 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
            <FaBullhorn className="mr-2" /> Exam Update
          </NavLink>

          {/* Mobile Buttons */}
          <NavLink to="/Host" className="px-4 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Host
          </NavLink>
          <button onClick={() => { openModal(); setIsOpen(false); }} className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md">
            Login
          </button>
        </div>
      )}

      {/* Login Modal */}
      {isModalOpen && <LoginSignupModal type="login" closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
