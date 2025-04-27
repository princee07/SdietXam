import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc"; // Import Google icon
import { useNavigate } from "react-router-dom";

const LoginSignupModal = ({ type, closeModal }) => {
  const { signup, login, loginWithGoogle } = useAuth();
  const [isLogin, setIsLogin] = useState(type === "login"); // Determine if it's login or signup
  const [role, setRole] = useState("user"); // Default role is "user"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Add useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        // Signup logic
        await signup(email, password, role); // Pass role during signup
      } else {
        // Login logic
        await login(email, password, role); // Pass role to login
      }
      closeModal(); // Close modal after successful login/signup

      // Redirect to Host Dashboard if role is "host"
      if (role === "host") {
        navigate("/host-dashboard");
      }
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      closeModal(); // Close modal after successful login
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!role ? (
          // Role Selection Step
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Choose Role</h2>
            <div className="flex justify-around">
              <button
                onClick={() => setRole("user")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                User
              </button>
              <button
                onClick={() => setRole("host")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Host
              </button>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        ) : (
          // Login/Signup Form
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isLogin ? `Login as ${role}` : `Signup as ${role}`}
            </h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Role */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Role:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="host">Host</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>

            {/* Google Login */}
            <div className="mt-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2"
              >
                <FcGoogle className="text-xl" /> {/* Google Icon */}
                Login with Google
              </button>
            </div>

            {/* Toggle Between Login and Signup */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:underline"
                >
                  {isLogin ? "Signup" : "Login"}
                </button>
              </p>
            </div>

            {/* Back to Role Selection */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setRole("")}
                className="text-gray-500 hover:underline"
              >
                Back to Role Selection
              </button>
            </div>

            {/* Cancel Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupModal;