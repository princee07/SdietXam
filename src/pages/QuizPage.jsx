import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, 
  FaChartBar, FaTrophy, FaRegLightbulb, FaSpinner, FaBook,
  FaQuestionCircle, FaClipboardCheck
} from "react-icons/fa";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const semester = searchParams.get("semester");
  const subject = searchParams.get("subject");

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});
  
  // New state variables for slide-based navigation
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResults, setQuizResults] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
    totalQuestions: 0,
    score: 0,
    answerDetails: []
  });
  const [questionTimeStart, setQuestionTimeStart] = useState(Date.now());
  const [questionTimes, setQuestionTimes] = useState([]);
  const [slideTransition, setSlideTransition] = useState('fade-in');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/quizzes?semester=${semester}&subject=${subject}`
        );
        const data = await response.json();
        setQuizzes(data);
        
        // Initialize empty user answers for all questions
        if (data.length > 0) {
          const initialAnswers = {};
          data[0].questions.forEach((_, index) => {
            initialAnswers[index] = null;
          });
          setUserAnswers(initialAnswers);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [semester, subject]);

  // Reset question timer when moving to a new question
  useEffect(() => {
    setQuestionTimeStart(Date.now());
  }, [currentQuestionIndex]);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const nextQuestion = () => {
    // Record time spent on current question
    const timeSpent = (Date.now() - questionTimeStart) / 1000; // seconds
    setQuestionTimes(prev => {
      const newTimes = [...prev];
      newTimes[currentQuestionIndex] = timeSpent;
      return newTimes;
    });

    // Trigger slide transition animation
    setSlideTransition('slide-out');
    setTimeout(() => {
      if (currentQuizIndex < quizzes.length && 
          currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      setSlideTransition('slide-in');
    }, 300);
  };

  const previousQuestion = () => {
    // Trigger slide transition animation
    setSlideTransition('slide-out-right');
    setTimeout(() => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
      setSlideTransition('slide-in-left');
    }, 300);
  };

  const calculateResults = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    let correct = 0;
    let wrong = 0;
    const details = [];

    currentQuiz.questions.forEach((question, index) => {
      const isCorrect = userAnswers[index] === question.correctAnswer;
      if (isCorrect) correct++;
      else wrong++;

      details.push({
        question: question.question,
        userAnswer: userAnswers[index],
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        timeSpent: questionTimes[index] || 0
      });
    });

    const totalQuestions = currentQuiz.questions.length;
    const scorePercentage = Math.round((correct / totalQuestions) * 100);

    return {
      correctAnswers: correct,
      wrongAnswers: wrong,
      totalQuestions: totalQuestions,
      score: scorePercentage,
      answerDetails: details
    };
  };

  const handleSubmitQuiz = () => {
    // Record time for final question
    const timeSpent = (Date.now() - questionTimeStart) / 1000;
    setQuestionTimes(prev => {
      const newTimes = [...prev];
      newTimes[currentQuestionIndex] = timeSpent;
      return newTimes;
    });

    // Calculate and set results
    const results = calculateResults();
    setQuizResults(results);
    setQuizSubmitted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <FaSpinner className="text-5xl text-indigo-600 animate-spin mb-4" />
        <p className="text-xl text-gray-700">Loading your quiz...</p>
      </div>
    );
  }

  if (quizzes.length === 0) {
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
  }

  // Display results if quiz is submitted
  if (quizSubmitted) {
    const { correctAnswers, wrongAnswers, totalQuestions, score, answerDetails } = quizResults;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Results Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <FaChartBar className="mr-3" /> Quiz Results
              </h1>
              <p className="text-indigo-100">
                {quizzes[currentQuizIndex].title}
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
                <button 
                  onClick={() => {
                    setQuizSubmitted(false);
                    setCurrentQuestionIndex(0);
                    setQuestionTimes([]);
                    
                    // Reset answers
                    const initialAnswers = {};
                    quizzes[currentQuizIndex].questions.forEach((_, index) => {
                      initialAnswers[index] = null;
                    });
                    setUserAnswers(initialAnswers);
                  }}
                  className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display quiz questions as slides
  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const totalQuestions = currentQuiz.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {currentQuiz.title}
          </h1>
          <p className="text-gray-600">{currentQuiz.description}</p>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{currentQuestionIndex + 1} of {totalQuestions}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Question Slide */}
        <div className={`bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 ${slideTransition}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium flex items-center">
                <FaQuestionCircle className="mr-2" /> 
                Question {currentQuestionIndex + 1}
              </h2>
              <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
                {Math.floor((currentQuestionIndex + 1) / totalQuestions * 100)}%
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-xl font-medium text-gray-800 mb-6">
              {currentQuestion.question}
            </p>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, oIndex) => {
                const isSelected = userAnswers[currentQuestionIndex] === option;
                
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
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={isSelected}
                      onChange={() => handleOptionChange(currentQuestionIndex, option)}
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
        
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-5 py-2.5 flex items-center rounded-lg ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200'
            }`}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
          
          {isLastQuestion ? (
            <button
              onClick={handleSubmitQuiz}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="px-5 py-2.5 flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          )}
        </div>
      </div>
      
      {/* Add CSS for slide transitions */}
      <style jsx="true">{`
        .fade-in { opacity: 1; transition: opacity 0.3s ease-in-out; }
        .fade-out { opacity: 0; transition: opacity 0.3s ease-in-out; }
        .slide-in { animation: slideInRight 0.3s forwards; }
        .slide-out { animation: slideOutLeft 0.3s forwards; }
        .slide-in-left { animation: slideInLeft 0.3s forwards; }
        .slide-out-right { animation: slideOutRight 0.3s forwards; }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default QuizPage;