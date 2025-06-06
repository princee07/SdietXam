import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  FaBook, FaCode, FaTrophy, FaChalkboardTeacher, FaBullhorn, 
  FaStickyNote, FaUserCircle, FaChartArea, FaFileAlt,
  FaUserGraduate, FaChalkboard, FaAngleDown
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useAuth } from "../context/AuthContext";
import LoginSignupModal from "./LoginSignupModal";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginType, setLoginType] = useState("user"); // "user" or "host"
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const loginOptionsRef = useRef(null);

  const openModal = (type) => {
    setLoginType(type);
    setIsModalOpen(true);
    setShowLoginOptions(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  // Close login options dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginOptionsRef.current && !loginOptionsRef.current.contains(event.target)) {
        setShowLoginOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Host navigation links with icons
  const hostLinks = [
    { to: "/quiz", icon: <FaChartArea />, label: "Quiz" },
    { to: "/notes", icon: <FaFileAlt />, label: "Notes" },
    { to: "/host-profile", icon: <FaUserCircle />, label: "Profile" },
  ];

  // User navigation links with icons
  const userLinks = [
    { to: "/courses", icon: <FaBook />, label: "Learn" },
    { to: "/practice", icon: <FaCode />, label: "Practice" },
    { to: "/Leaderboard", icon: <FaTrophy />, label: "Compete" },
    { to: "/mentor", icon: <FaChalkboardTeacher />, label: "Mentorship" },
    { to: "/exam-updates", icon: <FaBullhorn />, label: "Exam Update" },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
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
            // Host Navigation Links
            hostLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-500 transition-colors duration-200`
                }
              >
                <span className="text-xl lg:text-3xl">{item.icon}</span>
                <span className="text-xs lg:text-sm font-semibold">{item.label}</span>
              </NavLink>
            ))
          ) : (
            // User Navigation Links
            userLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-500 transition-colors duration-200`
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
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/market" className="hidden md:flex items-center gap-2 bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-blue-600 transition-colors duration-200">
                Market
              </NavLink>
              
              {/* Login Button with Dropdown */}
              <div className="relative" ref={loginOptionsRef}>
                <button
                  onClick={toggleLoginOptions}
                  className="hidden md:flex items-center gap-2 bg-yellow-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-yellow-600 transition-colors duration-200"
                >
                  <span>Login</span>
                  <FaAngleDown className={`transition-transform ${showLoginOptions ? "rotate-180" : ""}`} />
                </button>
                
                {/* Login Options Dropdown */}
                {showLoginOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <button
                      onClick={() => openModal("user")}
                      className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <FaUserGraduate className="mr-3 text-yellow-500" />
                      <span>Login as Student</span>
                    </button>
                    <button
                      onClick={() => openModal("host")}
                      className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <FaChalkboard className="mr-3 text-blue-500" />
                      <span>Login as Host</span>
                    </button>
                  </div>
                )}
              </div>
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
        <div className="md:hidden bg-white shadow-lg absolute w-full z-20 py-4 border-t border-gray-200">
          <div className="container mx-auto px-4">
            {currentUser?.role === "host" ? (
              // Mobile Host Navigation
              <div className="grid grid-cols-3 gap-4">
                {hostLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex flex-col items-center p-3 rounded-lg ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            ) : (
              // Mobile User Navigation
              <div className="grid grid-cols-2 gap-4">
                {userLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex flex-col items-center p-3 rounded-lg ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </NavLink>
                ))}
              </div>
            )}

            {/* Mobile Authentication Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              {currentUser ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 bg-red-600 text-white rounded-lg text-center font-medium"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/Host"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg text-center font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Host
                  </NavLink>
                  
                  {/* Mobile Login Options */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        openModal("user");
                        setIsOpen(false);
                      }}
                      className="py-3 bg-yellow-500 text-white rounded-lg text-center font-medium flex items-center justify-center"
                    >
                      <FaUserGraduate className="mr-2" /> Student Login
                    </button>
                    <button
                      onClick={() => {
                        openModal("host");
                        setIsOpen(false);
                      }}
                      className="py-3 bg-blue-600 text-white rounded-lg text-center font-medium flex items-center justify-center"
                    >
                      <FaChalkboard className="mr-2" /> Host Login
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Render LoginSignupModal with appropriate type */}
      {isModalOpen && <LoginSignupModal type={loginType} closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;