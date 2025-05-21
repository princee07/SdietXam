import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveQuizResult } from "../services/quizResultService";

// Import components
import LoadingQuiz from "../components/quiz/LoadingQuiz";
import EmptyQuizState from "../components/quiz/EmptyQuizState";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import QuizNavigation from "../components/quiz/QuizNavigation";
import QuizResults from "../components/quiz/QuizResults";
import SubmitToLeaderboard from "../components/quiz/SubmitToLeaderboard";

const QuizPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const semester = searchParams.get("semester");
  const subject = searchParams.get("subject");

  // State
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});
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
  const [showLeaderboardForm, setShowLeaderboardForm] = useState(false);

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
      answerDetails: details,
      quizTitle: currentQuiz.title,
      subject: subject,
      semester: semester
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
  
  const handleSubmitToLeaderboard = async (userData) => {
    try {
      const quizResultData = {
        name: userData.name,
        course: userData.course.toLowerCase(), // Convert to lowercase to match your categories
        score: quizResults.score,
        correctAnswers: quizResults.correctAnswers,
        wrongAnswers: quizResults.wrongAnswers,
        quizTitle: quizResults.quizTitle,
        subject: quizResults.subject,
        semester: quizResults.semester,
        timeSpent: Math.round(questionTimes.reduce((sum, time) => sum + time, 0)),
        // Add any additional fields required for your leaderboard display
        badges: Math.floor(quizResults.score / 10), // Example calculation
        streak: 1,
        // Add course-specific fields based on userData.course
        ...(userData.course.toLowerCase() === "btech" ? {
          course: "Computer Science", // Default value or get from userData
          year: "1st", // Default value or get from userData
        } : {
          semester: "1st", // Default value or get from userData
          specialization: userData.course.toLowerCase() === "bca" ? "Web Development" : "Marketing"
        })
      };
      
      // Send the quiz result to the server
      await saveQuizResult(quizResultData);
      
      // Navigate to the leaderboard page with the new entry details
      navigate('/leaderboard', { 
        state: { 
          newEntry: {
            name: userData.name,
            score: quizResults.score,
            course: userData.course.toLowerCase()
          } 
        }
      });
    } catch (error) {
      console.error("Error submitting score:", error);
      alert("There was an issue submitting your score. Please try again.");
    }
  };

  const retakeQuiz = () => {
    setQuizSubmitted(false);
    setCurrentQuestionIndex(0);
    setQuestionTimes([]);
    setShowLeaderboardForm(false);
    
    // Reset answers
    const initialAnswers = {};
    quizzes[currentQuizIndex].questions.forEach((_, index) => {
      initialAnswers[index] = null;
    });
    setUserAnswers(initialAnswers);
  };

  // Render conditions
  if (loading) {
    return <LoadingQuiz />;
  }

  if (quizzes.length === 0) {
    return <EmptyQuizState semester={semester} subject={subject} />;
  }

  // Display results if quiz is submitted
  if (quizSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {showLeaderboardForm ? (
            <SubmitToLeaderboard 
              quizResults={quizResults}
              onSubmit={handleSubmitToLeaderboard}
              onCancel={() => setShowLeaderboardForm(false)}
            />
          ) : (
            <QuizResults 
              quizResults={quizResults}
              quizTitle={quizzes[currentQuizIndex].title}
              onRetakeQuiz={retakeQuiz}
              onSubmitToLeaderboard={() => setShowLeaderboardForm(true)}
            />
          )}
        </div>
      </div>
    );
  }

  // Display quiz questions
  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const totalQuestions = currentQuiz.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <QuizHeader 
          title={currentQuiz.title}
          description={currentQuiz.description}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
        
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          userAnswer={userAnswers[currentQuestionIndex]}
          onOptionChange={handleOptionChange}
          transition={slideTransition}
        />
        
        <QuizNavigation
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={isLastQuestion}
          onPrevious={previousQuestion}
          onNext={nextQuestion}
          onSubmit={handleSubmitQuiz}
        />
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