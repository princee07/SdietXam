import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const QuizNavigation = ({ 
  currentQuestion,
  totalQuestions,
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onSubmit
}) => {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className={`px-5 py-2.5 flex items-center rounded-lg ${
          isFirstQuestion
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200'
        }`}
      >
        <FaArrowLeft className="mr-2" /> Previous
      </button>
      
      <div className="text-sm text-gray-500">
        Question {currentQuestion} of {totalQuestions}
      </div>
      
      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2.5 flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default QuizNavigation;