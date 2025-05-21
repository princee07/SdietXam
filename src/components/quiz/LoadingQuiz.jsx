// filepath: c:\Prjoects\princeProjects\Sdietians\SdietXam\src\components\quiz\LoadingQuiz.jsx
import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingQuiz = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <FaSpinner className="text-5xl text-indigo-600 animate-spin mb-4" />
      <p className="text-xl text-gray-700">Loading your quiz...</p>
    </div>
  );
};

export default LoadingQuiz;