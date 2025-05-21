import React, { useState } from "react";
import { 
  FaGraduationCap, FaBook, FaUser, FaQuestion, FaPlus, 
  FaCheckCircle, FaTrashAlt, FaEye, FaPaperPlane, FaEdit,
  FaListOl, FaSave, FaChalkboardTeacher, FaPuzzlePiece
} from "react-icons/fa";

const CreateQuiz = () => {
  const [semester, setSemester] = useState("");
  const [hostName, setHostName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  const [activeTab, setActiveTab] = useState("add"); // 'add' or 'preview'
  const [questionEditing, setQuestionEditing] = useState(null);

  const semesters = [
    "Semester 1", "Semester 2", "Semester 3", "Semester 4",
    "Semester 5", "Semester 6", "Semester 7", "Semester 8",
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
    if (questionEditing !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[questionEditing] = newQuestion;
      setQuestions(updatedQuestions);
      setQuestionEditing(null);
    } else {
      setQuestions([...questions, newQuestion]);
    }
    setNewQuestion({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  const handleEditQuestion = (index) => {
    setNewQuestion(questions[index]);
    setQuestionEditing(index);
    setActiveTab("add");
    // Scroll to the question form
    document.getElementById("questionForm").scrollIntoView({ behavior: "smooth" });
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
    if (questionEditing === index) {
      setQuestionEditing(null);
      setNewQuestion({ question: "", options: ["", "", "", ""], correctAnswer: "" });
    } else if (questionEditing !== null && questionEditing > index) {
      setQuestionEditing(questionEditing - 1);
    }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-800 mb-3 flex items-center justify-center">
            <FaChalkboardTeacher className="mr-3 text-indigo-600" />
            Create Interactive Quiz
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Design engaging quizzes for your students. Add multiple-choice questions, 
            track correct answers, and help students test their knowledge.
          </p>
        </div>

        {/* Quiz Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPuzzlePiece className="mr-2 text-indigo-600" />
            Quiz Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Semester and Subject */}
            <div>
              {/* Semester Field */}
              <div className="mb-6">
                <label htmlFor="semester" className="flex items-center text-lg font-medium mb-2 text-gray-700">
                  <FaGraduationCap className="mr-2 text-indigo-600" />
                  Select Semester
                </label>
                <select
                  id="semester"
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                    setSubjectName("");
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
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
              <div className="mb-6">
                <label htmlFor="subjectName" className="flex items-center text-lg font-medium mb-2 text-gray-700">
                  <FaBook className="mr-2 text-indigo-600" />
                  Select Subject
                </label>
                <select
                  id="subjectName"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  disabled={!semester}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${!semester ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                >
                  <option value="">-- Select Subject --</option>
                  {subjectsBySemester[semester]?.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                {!semester && (
                  <p className="mt-1 text-sm text-indigo-600">
                    Select a semester first
                  </p>
                )}
              </div>
            </div>

            {/* Right Column - Host Name and Summary */}
            <div>
              {/* Host Name Field */}
              <div className="mb-6">
                <label htmlFor="hostName" className="flex items-center text-lg font-medium mb-2 text-gray-700">
                  <FaUser className="mr-2 text-indigo-600" />
                  Host Name
                </label>
                <input
                  id="hostName"
                  type="text"
                  value={hostName}
                  onChange={(e) => setHostName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Quiz Summary */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-medium text-indigo-800 mb-2">Quiz Summary</h3>
                <div className="text-gray-700">
                  <p><span className="font-medium">Title:</span> {subjectName ? `${subjectName} - ${semester}` : 'Not set yet'}</p>
                  <p><span className="font-medium">Questions:</span> {questions.length}</p>
                  <p><span className="font-medium">Status:</span> {questions.length > 0 ? 'Ready to submit' : 'Add questions to complete'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Questions Management */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaQuestion className="mr-2 text-indigo-600" />
            Manage Questions
          </h2>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button 
              className={`px-6 py-3 font-medium flex items-center ${activeTab === 'add' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
              onClick={() => setActiveTab('add')}
            >
              <FaPlus className="mr-2" />
              {questionEditing !== null ? 'Edit' : 'Add'} Question
            </button>
            <button 
              className={`px-6 py-3 font-medium flex items-center ${activeTab === 'preview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-500'}`}
              onClick={() => setActiveTab('preview')}
            >
              <FaListOl className="mr-2" />
              Questions List ({questions.length})
            </button>
          </div>

          {/* Add/Edit Question Form */}
          {activeTab === 'add' && (
            <div id="questionForm" className="bg-indigo-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-800 mb-4 flex items-center">
                {questionEditing !== null ? (
                  <>
                    <FaEdit className="mr-2" />
                    Editing Question {questionEditing + 1}
                  </>
                ) : (
                  <>
                    <FaPlus className="mr-2" />
                    New Question
                  </>
                )}
              </h3>
              
              {/* Question */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">Question Text:</label>
                <textarea
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  placeholder="Enter your question here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  rows="2"
                />
              </div>
              
              {/* Options */}
              <div className="mb-6">
                <h4 className="text-md font-medium mb-3 text-gray-700">Answer Options:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {newQuestion.options.map((option, index) => (
                    <div key={index} className="relative">
                      <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-tl-lg rounded-br-lg">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...newQuestion.options];
                          updatedOptions[index] = e.target.value;
                          setNewQuestion({ ...newQuestion, options: updatedOptions });
                        }}
                        placeholder={`Option ${index + 1}`}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                      <div 
                        className={`absolute right-3 top-3 w-5 h-5 rounded-full cursor-pointer ${newQuestion.correctAnswer === option ? 'bg-green-500' : 'bg-gray-200'}`}
                        onClick={() => {
                          if (option) {
                            setNewQuestion({ ...newQuestion, correctAnswer: option });
                          }
                        }}
                      >
                        {newQuestion.correctAnswer === option && (
                          <FaCheckCircle className="text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-sm text-indigo-600">Click the circle to mark the correct answer</p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleAddQuestion}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1 flex items-center"
                >
                  {questionEditing !== null ? (
                    <>
                      <FaSave className="mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <FaPlus className="mr-2" />
                      Add Question
                    </>
                  )}
                </button>
                
                {questionEditing !== null && (
                  <button
                    onClick={() => {
                      setQuestionEditing(null);
                      setNewQuestion({ question: "", options: ["", "", "", ""], correctAnswer: "" });
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Questions Preview List */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              {questions.length > 0 ? (
                questions.map((q, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg text-gray-800">
                          <span className="inline-block w-7 h-7 bg-indigo-600 text-white rounded-full text-center leading-7 mr-2">
                            {index + 1}
                          </span>
                          {q.question}
                        </h3>
                        
                        <div className="mt-3 grid md:grid-cols-2 gap-2">
                          {q.options.map((option, optIndex) => (
                            <div 
                              key={optIndex} 
                              className={`p-3 rounded-lg border ${q.correctAnswer === option ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                            >
                              <span className="inline-block w-6 h-6 bg-gray-600 text-white rounded-full text-center text-sm leading-6 mr-2">
                                {String.fromCharCode(65 + optIndex)}
                              </span>
                              {option}
                              {q.correctAnswer === option && (
                                <FaCheckCircle className="inline-block ml-2 text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditQuestion(index)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit Question"
                        >
                          <FaEdit />
                        </button>
                        <button 
                          onClick={() => handleDeleteQuestion(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                          title="Delete Question"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-indigo-400 text-5xl mb-4">
                    <FaQuestion className="inline-block" />
                  </div>
                  <p className="text-gray-500 mb-4">No questions added yet.</p>
                  <button
                    onClick={() => setActiveTab('add')}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200"
                  >
                    <FaPlus className="inline-block mr-1" /> Add Your First Question
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Submit Quiz */}
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            {questions.length === 0 ? (
              <span className="text-yellow-600">Add at least one question to submit</span>
            ) : (
              <span className="text-green-600">{questions.length} question{questions.length !== 1 && 's'} ready</span>
            )}
          </div>
          <button
            onClick={handleSubmitQuiz}
            disabled={questions.length === 0}
            className={`px-8 py-3 rounded-lg shadow-lg flex items-center font-medium ${
              questions.length === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all'
            }`}
          >
            <FaPaperPlane className="mr-2" />
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;