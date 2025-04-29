import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubjectSelection = () => {
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (!semester || !subject) {
      alert("Please select both semester and subject.");
      return;
    }
    navigate(`/quiz/start?semester=${semester}&subject=${subject}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Select Quiz</h1>

      {/* Semester Selection */}
      <div className="mb-6">
        <label htmlFor="semester" className="block text-lg font-semibold mb-2">
          Select Semester:
        </label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Semester --</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
          {/* Add more semesters as needed */}
        </select>
      </div>

      {/* Subject Selection */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-lg font-semibold mb-2">
          Select Subject:
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Subject --</option>
          <option value="Mathematics I">Mathematics I</option>
          <option value="Physics">Physics</option>
          {/* Add more subjects as needed */}
        </select>
      </div>

      {/* Start Quiz Button */}
      <button
        onClick={handleStartQuiz}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default SubjectSelection;