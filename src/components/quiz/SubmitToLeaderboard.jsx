import React, { useState } from "react";
import { FaTrophy, FaUserGraduate, FaArrowLeft } from "react-icons/fa";

const SubmitToLeaderboard = ({ quizResults, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    course: "btech" // Default to BTech
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.course) newErrors.course = "Course is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Make sure course is one of 'btech', 'bca', 'bba'
      onSubmit({
        name: formData.name,
        course: formData.course, // This should be 'btech', 'bca', or 'bba' not "Computer Science"
        // Other fields...
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <FaTrophy className="mr-3" /> Join the Leaderboard
        </h1>
        <p className="text-indigo-100">
          Add your score of {quizResults.score}% to the leaderboard
        </p>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Your Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                errors.course ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="btech">BTech</option>
              <option value="bca">BCA</option>
              <option value="bba">BBA</option>
            </select>
            {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
          </div>
          
          <div className="flex items-center justify-between pt-4 space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Results
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <FaUserGraduate className="mr-2" />
                Submit to Leaderboard
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitToLeaderboard;