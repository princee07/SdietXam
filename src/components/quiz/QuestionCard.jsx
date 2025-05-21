import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const QuestionCard = ({ question, questionIndex, userAnswer, onOptionChange, transition }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 ${transition}`}>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium flex items-center">
            <FaQuestionCircle className="mr-2" /> 
            Question {questionIndex + 1}
          </h2>
          <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
            {Math.floor((questionIndex + 1) / question.options.length * 100)}%
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-xl font-medium text-gray-800 mb-6">
          {question.question}
        </p>
        
        <div className="space-y-3">
          {question.options.map((option, oIndex) => {
            const isSelected = userAnswer === option;
            
            return (
              <label
                key={oIndex}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all transform hover:-translate-y-1 ${
                  isSelected 
                    ? 'bg-indigo-100 border-2 border-indigo-500 shadow-md' 
                    : 'bg-white border border-gray-200 hover:border-indigo-300 hover:shadow'
                }`}
              >
                <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                  isSelected 
                    ? 'bg-indigo-500 text-white' 
                    : 'border-2 border-gray-300'
                }`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={option}
                  checked={isSelected}
                  onChange={() => onOptionChange(questionIndex, option)}
                  className="sr-only" // Hide default radio button
                />
                <span className={`text-base ${isSelected ? 'text-indigo-800 font-medium' : 'text-gray-700'}`}>
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;