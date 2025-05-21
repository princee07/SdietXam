import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClipboardCheck } from "react-icons/fa";

const QuestionReview = ({ answerDetails }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <FaClipboardCheck className="mr-2" /> Question Review
      </h2>
      
      <div className="space-y-4 mb-6">
        {answerDetails.map((detail, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border ${
              detail.isCorrect 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-start">
              <div className={`rounded-full p-2 mr-3 ${
                detail.isCorrect 
                  ? 'bg-green-200 text-green-700' 
                  : 'bg-red-200 text-red-700'
                }`}>
                {detail.isCorrect 
                  ? <FaCheckCircle /> 
                  : <FaTimesCircle />}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">
                  Question {index + 1}: {detail.question}
                </h3>
                <div className="mt-2 text-sm">
                  <p className={detail.isCorrect ? "text-green-600" : "text-gray-600"}>
                    Your answer: {detail.userAnswer || "No answer provided"}
                  </p>
                  {!detail.isCorrect && (
                    <p className="text-red-600 mt-1">
                      Correct answer: {detail.correctAnswer}
                    </p>
                  )}
                  <p className="text-gray-500 mt-1">
                    Time spent: {Math.round(detail.timeSpent)} seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionReview;