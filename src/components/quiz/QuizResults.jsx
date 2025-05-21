import React from "react";
import { 
  FaChartBar, FaTrophy, FaRegLightbulb, FaCheckCircle, FaTimesCircle
} from "react-icons/fa";
import QuestionReview from "./QuestionReview";

const QuizResults = ({ quizResults, quizTitle, onRetakeQuiz, onSubmitToLeaderboard }) => {
  const { correctAnswers, wrongAnswers, totalQuestions, score, answerDetails } = quizResults;
  
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Results Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <FaChartBar className="mr-3" /> Quiz Results
        </h1>
        <p className="text-indigo-100">
          {quizTitle}
        </p>
      </div>
      
      {/* Score Summary */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`rounded-xl p-6 text-center shadow-md ${
            score >= 70 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : score >= 40 
                ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <FaTrophy className="text-4xl mx-auto mb-2" />
            <h2 className="text-3xl font-bold">{score}%</h2>
            <p className="text-sm opacity-80">Overall Score</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md border border-blue-200 text-blue-800">
            <FaCheckCircle className="text-4xl mx-auto mb-2" />
            <h2 className="text-3xl font-bold">{correctAnswers}</h2>
            <p className="text-sm opacity-80">Correct Answers</p>
          </div>
          
          <div className="bg-pink-50 rounded-xl p-6 text-center shadow-md border border-pink-200 text-pink-800">
            <FaTimesCircle className="text-4xl mx-auto mb-2" />
            <h2 className="text-3xl font-bold">{wrongAnswers}</h2>
            <p className="text-sm opacity-80">Incorrect Answers</p>
          </div>
        </div>
        
        {/* Detailed Results */}
        <QuestionReview answerDetails={answerDetails} />
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-200">
          <div>
            {score >= 70 ? (
              <p className="text-green-600 font-medium flex items-center">
                <FaRegLightbulb className="mr-2" /> 
                Great job! You passed the quiz!
              </p>
            ) : score >= 40 ? (
              <p className="text-yellow-600 font-medium flex items-center">
                <FaRegLightbulb className="mr-2" />
                Almost there! A bit more study would help.
              </p>
            ) : (
              <p className="text-red-600 font-medium flex items-center">
                <FaRegLightbulb className="mr-2" />
                You might need to review this material.
              </p>
            )}
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button 
              onClick={onRetakeQuiz}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Retake Quiz
            </button>
            <button 
              onClick={onSubmitToLeaderboard}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Add to Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;