import React, { useState } from "react";

const CreateQuiz = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: "", options: ["", "", "", ""], correctAnswer: "" });

  const domains = ["Mathematics", "Physics", "Computer Science", "Mechanical Engineering", "Civil Engineering"];

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  const handleSubmitQuiz = () => {
    // Submit the quiz to the backend
    console.log({ domain: selectedDomain, questions });
    alert("Quiz created successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create a Quiz</h1>

      {/* Domain Selection */}
      <div className="mb-6">
        <label htmlFor="domain" className="block text-lg font-semibold mb-2">
          Select Domain:
        </label>
        <select
          id="domain"
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Domain --</option>
          {domains.map((domain, index) => (
            <option key={index} value={domain}>
              {domain}
            </option>
          ))}
        </select>
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