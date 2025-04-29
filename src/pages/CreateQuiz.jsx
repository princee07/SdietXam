import React, { useState } from "react";

const CreateQuiz = () => {
  const [semester, setSemester] = useState("");
  const [hostName, setHostName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: "", options: ["", "", "", ""], correctAnswer: "" });

  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  const subjectsBySemester = {
    "Semester 1": ["Mathematics I", "Physics I", "Chemistry", "Introduction to Programming"],
    "Semester 2": ["Mathematics II", "Physics II", "Data Structures", "Basic Electronics"],
    "Semester 3": ["Discrete Mathematics", "Computer Architecture", "Operating Systems", "Database Systems"],
    "Semester 4": ["Algorithms", "Software Engineering", "Computer Networks", "Theory of Computation"],
    "Semester 5": ["Artificial Intelligence", "Machine Learning", "Web Development", "Mobile Computing"],
    "Semester 6": ["Cloud Computing", "Big Data", "Cyber Security", "Blockchain"],
    "Semester 7": ["Advanced Algorithms", "IoT", "Natural Language Processing", "Data Visualization"],
    "Semester 8": ["Project Work", "Internship", "Research Paper", "Elective Subjects"],
  };

  const handleAddQuestion = () => {
    if (!newQuestion.question || newQuestion.options.some((opt) => !opt) || !newQuestion.correctAnswer) {
      alert("Please fill out all fields before adding a question.");
      return;
    }
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  const handleSubmitQuiz = async () => {
    if (!semester || !hostName || !subjectName) {
      alert("Please fill out all fields for Semester, Host Name, and Subject Name.");
      return;
    }
    if (questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }

    const quizData = {
      title: `${subjectName} - ${semester}`,
      description: `Quiz for ${subjectName} hosted by ${hostName}`,
      questions,
      semester,
      subject: subjectName,
      hostName,
    };

    try {
      const response = await fetch("http://localhost:5000/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        alert("Quiz created successfully!");
        setSemester("");
        setHostName("");
        setSubjectName("");
        setQuestions([]);
      } else {
        const error = await response.json();
        alert(`Failed to create quiz: ${error.error}`);
      }
    } catch (err) {
      console.error("Error creating quiz:", err);
      alert("An error occurred while creating the quiz.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Create a Quiz</h1>

      {/* Semester Field */}
      <div className="mb-6">
        <label htmlFor="semester" className="block text-lg font-semibold mb-2">
          Select Semester:
        </label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => {
            setSemester(e.target.value);
            setSubjectName(""); // Reset subject when semester changes
          }}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Semester --</option>
          {semesters.map((sem, index) => (
            <option key={index} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Name Field */}
      {semester && (
        <div className="mb-6">
          <label htmlFor="subjectName" className="block text-lg font-semibold mb-2">
            Select Subject:
          </label>
          <select
            id="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Subject --</option>
            {subjectsBySemester[semester]?.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Host Name Field */}
      <div className="mb-6">
        <label htmlFor="hostName" className="block text-lg font-semibold mb-2">
          Host Name:
        </label>
        <input
          id="hostName"
          type="text"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Add Questions */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Add Questions</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Question:</label>
          <input
            type="text"
            value={newQuestion.question}
            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {newQuestion.options.map((option, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-2">Option {index + 1}:</label>
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...newQuestion.options];
                  updatedOptions[index] = e.target.value;
                  setNewQuestion({ ...newQuestion, options: updatedOptions });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Correct Answer:</label>
          <input
            type="text"
            value={newQuestion.correctAnswer}
            onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddQuestion}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Add Question
        </button>
      </div>

      {/* Questions List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Questions List</h2>
        {questions.length > 0 ? (
          <ul className="list-disc pl-6">
            {questions.map((q, index) => (
              <li key={index} className="mb-2">
                <strong>Q{index + 1}:</strong> {q.question}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No questions added yet.</p>
        )}
      </div>

      {/* Submit Quiz */}
      <button
        onClick={handleSubmitQuiz}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;