import React from "react";
import { useNavigate } from "react-router-dom";

const BTechQuiz = () => {
  const navigate = useNavigate();

  const semesters = [
    { id: 1, title: "Semester 1", description: "Quizzes for Semester 1 students.", link: "/quiz/btech/sem1", bgColor: "bg-blue-100", textColor: "text-blue-600" },
    { id: 2, title: "Semester 2", description: "Quizzes for Semester 2 students.", link: "/quiz/btech/sem2", bgColor: "bg-green-100", textColor: "text-green-600" },
    { id: 3, title: "Semester 3", description: "Quizzes for Semester 3 students.", link: "/quiz/btech/sem3", bgColor: "bg-orange-100", textColor: "text-orange-600" },
    { id: 4, title: "Semester 4", description: "Quizzes for Semester 4 students.", link: "/quiz/btech/sem4", bgColor: "bg-pink-100", textColor: "text-pink-600" },
    { id: 5, title: "Semester 5", description: "Quizzes for Semester 5 students.", link: "/quiz/btech/sem5", bgColor: "bg-purple-100", textColor: "text-purple-600" },
    { id: 6, title: "Semester 6", description: "Quizzes for Semester 6 students.", link: "/quiz/btech/sem6", bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
    { id: 7, title: "Semester 7", description: "Quizzes for Semester 7 students.", link: "/quiz/btech/sem7", bgColor: "bg-red-100", textColor: "text-red-600" },
    { id: 8, title: "Semester 8", description: "Quizzes for Semester 8 students.", link: "/quiz/btech/sem8", bgColor: "bg-teal-100", textColor: "text-teal-600" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">B.Tech Quizzes</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Select your semester to access quizzes tailored for your curriculum.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((semester) => (
            <div
              key={semester.id}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${semester.bgColor}`}
              onClick={() => navigate(semester.link)}
            >
              <h3 className={`text-2xl font-bold mb-2 ${semester.textColor}`}>{semester.title}</h3>
              <p className="text-gray-700">{semester.description}</p>
              <span className="text-blue-500 font-medium hover:underline mt-4 block">
                Explore Quizzes →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BTechQuiz;