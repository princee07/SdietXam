import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const semester = searchParams.get("semester");
  const subject = searchParams.get("subject");

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState({}); // To store user-selected answers

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/quizzes?semester=${semester}&subject=${subject}`
        );
        const data = await response.json();
        setQuizzes(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [semester, subject]);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmitQuiz = () => {
    console.log("User Answers:", userAnswers);
    alert("Quiz submitted successfully!");
  };

  if (loading) {
    return <p className="text-center mt-8">Loading quizzes...</p>;
  }

  if (quizzes.length === 0) {
    return <p className="text-center mt-8">No quizzes available for this subject and semester.</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        Quizzes for {subject} - Semester {semester}
      </h1>
      <ul className="space-y-4">
        {quizzes.map((quiz, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">{quiz.title}</h2>
            <p className="text-sm text-gray-600">{quiz.description}</p>

            {/* Display Questions */}
            <ul className="mt-4 space-y-4">
              {quiz.questions.map((question, qIndex) => (
                <li key={qIndex} className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold mb-2">
                    Q{qIndex + 1}: {question.question}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {question.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm border border-gray-300"
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={option}
                          onChange={() => handleOptionChange(qIndex, option)}
                          className="form-radio text-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <button
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              onClick={handleSubmitQuiz}
            >
              Submit Quiz
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizPage;