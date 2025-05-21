import React from "react";
import { FaBook } from "react-icons/fa";

const EmptyQuizState = ({ semester, subject }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <FaBook className="text-5xl text-indigo-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">No Quizzes Available</h1>
        <p className="text-gray-600 mb-6">
          There are no quizzes available for {subject} in Semester {semester} at this time.
        </p>
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EmptyQuizState;