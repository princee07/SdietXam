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

  // Debugging currentUser
  console.log("Current User in Navbar:", currentUser);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:h-28">
        {/* Left Section */}
        <div className="flex items-center">
          <NavLink to={currentUser?.role === "host" ? "/host-dashboard" : "/"}>
            <img src={logo} alt="logo" className="h-16 w-auto lg:h-36 object-contain" />
          </NavLink>
        </div>

        {/* Center Section */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {currentUser?.role === "host" ? (
            <>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                }
              >
                <span className="text-xl lg:text-3xl"><FaStickyNote /></span>
                <span className="text-xs lg:text-sm font-semibold">Quiz</span>
              </NavLink>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"}`
                }
              >
                <span className="text-xl lg:text-3xl"><FaStickyNote /></span>
                <span className="text-xs lg:text-sm font-semibold">Notes</span>
              </NavLink>
            </>
          ) : (
            [
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
            ))
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {currentUser ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/Host" className="hidden md:flex items-center gap-2 bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-blue-600">
                Host
              </NavLink>
              <button
                onClick={openModal}
                className="hidden md:flex items-center gap-2 bg-yellow-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-yellow-600"
              >
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

      {/* Render LoginSignupModal */}
      {isModalOpen && <LoginSignupModal type="login" closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;