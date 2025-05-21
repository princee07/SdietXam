import React from "react";

const QuizHeader = ({ title, description, currentQuestion, totalQuestions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600">{description}</p>
      
      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{currentQuestion} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;