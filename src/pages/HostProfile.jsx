import React, { useState, useEffect } from "react";
import { 
  FaUserCircle, FaEdit, FaChartBar, FaFileAlt, 
  FaDownload, FaStar, FaUsers, FaChalkboardTeacher,
  FaCalendarAlt, FaClipboardList, FaEnvelope, FaPhone, 
  FaGraduationCap, FaIdCard, FaMapMarkerAlt, FaBookOpen,
  FaSave, FaTimes, FaTrash, FaPlus, FaRegLightbulb, FaTrophy,
  // Add these missing icons:
  FaLock, FaChevronDown
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HostProfile = () => {
  const { currentUser, updateProfile, logout, isOnline } = useAuth();
  // Add isOffline state to track network status
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  
  // Monitor network status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    teachingCourse: "",
    bio: "",
    department: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Load user data when component mounts
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        position: currentUser.position || "",
        teachingCourse: currentUser.teachingCourse || "",
        bio: currentUser.bio || "",
        department: currentUser.department || ""
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Check if offline before submitting
    if (isOffline) {
      setError("You are currently offline. Profile changes will be saved when you're back online.");
      setLoading(false);
      return;
    }

    try {
      await updateProfile({
        ...formData,
        profileComplete: true // Mark profile as complete
      });
      setSuccess(true);
      
      // Redirect to dashboard after short delay
      setTimeout(() => {
        navigate("/host-dashboard");
      }, 1500);
    } catch (err) {
      if (err.message.includes("offline") || err.code === "unavailable") {
        setError("You appear to be offline. Your changes will be saved when you reconnect.");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="animate-pulse flex space-x-4 items-center">
            <div className="rounded-full bg-slate-200 h-16 w-16"></div>
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-600">Loading profile data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      {isOffline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-100 text-yellow-800 px-4 py-2 text-center z-50 shadow-md">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            You are currently offline. Some features may be limited.
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative">
                {currentUser.photoURL ? (
                  <div className="relative">
                    <img 
                      src={currentUser.photoURL} 
                      alt={currentUser.name || "Profile"} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
                      <FaEdit className="text-blue-600 text-lg" />
                    </div>
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <FaUserCircle className="text-blue-600 text-6xl" />
                  </div>
                )}
              </div>
              <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-3xl font-bold">{formData.name || "Complete Your Profile"}</h1>
                <p className="text-blue-100 mt-1 flex items-center justify-center md:justify-start">
                  <FaEnvelope className="mr-2" /> {formData.email}
                </p>
                <p className="text-blue-100 mt-1 flex items-center justify-center md:justify-start">
                  {formData.position ? (
                    <>
                      <FaGraduationCap className="mr-2" /> {formData.position}
                      {formData.department && <span> · {formData.department}</span>}
                    </>
                  ) : (
                    <span className="text-blue-200 italic">Complete your profile details below</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaTimes className="text-red-500 mr-3 text-lg" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md">
            <div className="flex items-center">
              <FaRegLightbulb className="text-green-500 mr-3 text-lg" />
              <p className="text-green-700">Profile updated successfully! Redirecting to dashboard...</p>
            </div>
          </div>
        )}

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaChalkboardTeacher className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Host Information</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <FaIdCard className="mr-2" /> Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2 group-hover:text-blue-600 transition-colors" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUserCircle />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Dr. Jane Smith"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        disabled
                        className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                      <FaLock className="mr-1 text-xs" /> Email cannot be changed
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                  <FaGraduationCap className="mr-2" /> Professional Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors" htmlFor="position">
                      Academic Position
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUsers />
                      </div>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all appearance-none"
                        required
                      >
                        <option value="">Select Position</option>
                        <option value="Professor">Professor</option>
                        <option value="Associate Professor">Associate Professor</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                        <option value="Lecturer">Lecturer</option>
                        <option value="Lab Instructor">Lab Instructor</option>
                        <option value="Guest Faculty">Guest Faculty</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FaChevronDown className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors" htmlFor="department">
                      Department
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaMapMarkerAlt />
                      </div>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="e.g., Computer Science"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Teaching Information */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <FaBookOpen className="mr-2" /> Teaching Information
                </h3>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="teachingCourse">
                    Teaching Course
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <FaChalkboardTeacher />
                    </div>
                    <input
                      type="text"
                      id="teachingCourse"
                      name="teachingCourse"
                      value={formData.teachingCourse}
                      onChange={handleChange}
                      className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="e.g., Advanced Database Systems"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="bio">
                    Professional Bio
                  </label>
                  <div className="relative">
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="Tell students about your background, expertise, and teaching style..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between pt-4 gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1 flex items-center shadow-lg"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FaSave className="mr-2" /> Save Profile
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => navigate("/host-dashboard")}
                  className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1 flex items-center"
                >
                  <FaTimes className="mr-2" /> Skip for Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;