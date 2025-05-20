import React, { useState } from "react";
import { FaGoogle, FaTimes, FaUserGraduate, FaChalkboard, FaEnvelope, FaLock, FaSchool, FaIdCard, FaBookReader, FaCalendarAlt, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const LoginSignupModal = ({ type, closeModal }) => {
  // States for form toggle
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Student form states
  const [studentForm, setStudentForm] = useState({
    name: "",
    college: "",
    rollNo: "",
    course: "",
    semester: "",
    email: "",
    password: "",
  });
  
  // Host form states
  const [hostForm, setHostForm] = useState({
    name: "",
    position: "",
    email: "",
    course: "",
    password: "",
  });
  
  // Auth context (modify according to your authentication implementation)
  const { login, signup, googleSignIn } = useAuth();

  // Handle form toggle
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle student form change
  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value,
    });
  };

  // Handle host form change
  const handleHostChange = (e) => {
    const { name, value } = e.target;
    setHostForm({
      ...hostForm,
      [name]: value,
    });
  };

  // Handle student form submit
  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // Login logic
        await login(studentForm.email, studentForm.password, "user");
      } else {
        // Signup logic
        await signup(
          studentForm.email, 
          studentForm.password, 
          "user", 
          {
            name: studentForm.name,
            college: studentForm.college,
            rollNo: studentForm.rollNo,
            course: studentForm.course,
            semester: studentForm.semester
          }
        );
      }
      closeModal();
    } catch (error) {
      console.error("Authentication error:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle host form submit
  const handleHostSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // Login logic
        await login(hostForm.email, hostForm.password, "host");
      } else {
        // Signup logic
        await signup(
          hostForm.email, 
          hostForm.password, 
          "host",
          {
            name: hostForm.name,
            position: hostForm.position,
            teachingCourse: hostForm.course
          }
        );
      }
      closeModal();
    } catch (error) {
      console.error("Authentication error:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async (userType) => {
    setIsLoading(true);
    try {
      await googleSignIn(userType);
      closeModal();
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block p-3 rounded-full bg-blue-100 mb-3">
            {type === "user" ? (
              <FaUserGraduate className="text-blue-600 text-3xl" />
            ) : (
              <FaChalkboard className="text-blue-600 text-3xl" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Log In" : "Sign Up"} as {type === "user" ? "Student" : "Host"}
          </h2>
          <p className="text-gray-600 mt-1">
            {isLogin 
              ? "Welcome back! Please login to your account" 
              : "Create a new account to get started"
            }
          </p>
        </div>
        
        {/* Student Form */}
        {type === "user" && (
          <form onSubmit={handleStudentSubmit} className="space-y-4">
            {!isLogin && (
              <>
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="student-name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaUserGraduate />
                    </span>
                    <input
                      id="student-name"
                      type="text"
                      name="name"
                      value={studentForm.name}
                      onChange={handleStudentChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                {/* College Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="college">
                    College Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaSchool />
                    </span>
                    <input
                      id="college"
                      type="text"
                      name="college"
                      value={studentForm.college}
                      onChange={handleStudentChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your College"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                {/* Roll No Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="rollNo">
                    Roll Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaIdCard />
                    </span>
                    <input
                      id="rollNo"
                      type="text"
                      name="rollNo"
                      value={studentForm.rollNo}
                      onChange={handleStudentChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. 21BTCS072"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                {/* Course Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="course">
                    Course
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaBookReader />
                    </span>
                    <input
                      id="course"
                      type="text"
                      name="course"
                      value={studentForm.course}
                      onChange={handleStudentChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. B.Tech CSE"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                {/* Semester Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="semester">
                    Semester
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaCalendarAlt />
                    </span>
                    <select
                      id="semester"
                      name="semester"
                      value={studentForm.semester}
                      onChange={handleStudentChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={!isLogin}
                    >
                      <option value="">Select Semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                        <option key={sem} value={sem}>Semester {sem}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
            
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="student-email">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  id="student-email"
                  type="email"
                  name="email"
                  value={studentForm.email}
                  onChange={handleStudentChange}
                  className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="student-password">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaLock />
                </span>
                <input
                  id="student-password"
                  type="password"
                  name="password"
                  value={studentForm.password}
                  onChange={handleStudentChange}
                  className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={() => handleGoogleSignIn("user")}
              disabled={isLoading}
              className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-3 flex items-center justify-center"
            >
              <FaGoogle className="text-red-500 mr-2" />
              Continue with Google
            </button>
            
            {/* Form Toggle Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin ? "Sign up" : "Log in"}
                </button>
              </p>
            </div>
          </form>
        )}
        
        {/* Host Form */}
        {type === "host" && (
          <form onSubmit={handleHostSubmit} className="space-y-4">
            {!isLogin && (
              <>
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="host-name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaUserTie />
                    </span>
                    <input
                      id="host-name"
                      type="text"
                      name="name"
                      value={hostForm.name}
                      onChange={handleHostChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Dr. Jane Smith"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                {/* Position Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="position">
                    Position
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaUserTie />
                    </span>
                    <select
                      id="position"
                      name="position"
                      value={hostForm.position}
                      onChange={handleHostChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={!isLogin}
                    >
                      <option value="">Select Position</option>
                      <option value="Professor">Professor</option>
                      <option value="Associate Professor">Associate Professor</option>
                      <option value="Assistant Professor">Assistant Professor</option>
                      <option value="Lecturer">Lecturer</option>
                      <option value="Lab Instructor">Lab Instructor</option>
                      <option value="Guest Faculty">Guest Faculty</option>
                    </select>
                  </div>
                </div>
                
                {/* Teaching Course Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="host-course">
                    Teaching Course
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <FaChalkboardTeacher />
                    </span>
                    <input
                      id="host-course"
                      type="text"
                      name="course"
                      value={hostForm.course}
                      onChange={handleHostChange}
                      className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Database Systems"
                      required={!isLogin}
                    />
                  </div>
                </div>
              </>
            )}
            
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="host-email">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  id="host-email"
                  type="email"
                  name="email"
                  value={hostForm.email}
                  onChange={handleHostChange}
                  className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="host-password">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaLock />
                </span>
                <input
                  id="host-password"
                  type="password"
                  name="password"
                  value={hostForm.password}
                  onChange={handleHostChange}
                  className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={() => handleGoogleSignIn("host")}
              disabled={isLoading}
              className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-3 flex items-center justify-center"
            >
              <FaGoogle className="text-red-500 mr-2" />
              Continue with Google
            </button>
            
            {/* Form Toggle Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin ? "Sign up" : "Log in"}
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupModal;