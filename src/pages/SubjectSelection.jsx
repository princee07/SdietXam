import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SubjectSelection = () => {
  const { semId } = useParams(); // Get the semester ID from the URL
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = {
    sem1: ["Mathematics", "Physics", "Chemistry"],
    sem2: ["Data Structures", "Digital Logic", "Mathematics II"],
    sem3: ["Algorithms", "Operating Systems", "Database Systems"],
    sem4: ["Computer Networks", "Software Engineering", "Theory of Computation"],
    sem5: ["Artificial Intelligence", "Machine Learning", "Web Development"],
    sem6: ["Cloud Computing", "Cyber Security", "Mobile App Development"],
    sem7: ["Big Data", "Blockchain", "IoT"],
    sem8: ["Project Management", "Entrepreneurship", "Advanced Topics"],
  };

  const handleStartQuiz = () => {
    if (selectedSubject) {
      navigate(`/quiz/btech/${semId}/${selectedSubject.toLowerCase().replace(/\s+/g, "-")}`);
    } else {
      alert("Please select a subject to proceed.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Semester {semId} - Select a Subject</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Choose a subject to start your quiz.
        </p>

        {/* Subject Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects[`sem${semId}`]?.map((subject, index) => (
            <div
              key={index}
              className={`p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${
                selectedSubject === subject ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedSubject(subject)}
            >
              <h3 className="text-xl font-bold text-blue-600">{subject}</h3>
            </div>
          ))}
        </div>

        {/* Start Quiz Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;