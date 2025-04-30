import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CreateNotes = () => {
  const { category } = useParams(); // Get the category from the URL
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [senderName, setSenderName] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  // Mapping of semesters to subjects
  const semesterSubjects = {
    "Semester 1": ["Mathematics", "Physics", "Chemistry"],
    "Semester 2": ["Data Structures", "Digital Logic", "Mathematics II"],
    "Semester 3": ["Operating Systems", "Database Management Systems", "Computer Networks"],
    "Semester 4": ["Algorithms", "Software Engineering", "Discrete Mathematics"],
    "Semester 5": ["Artificial Intelligence", "Machine Learning", "Cloud Computing"],
    "Semester 6": ["Cyber Security", "Big Data", "Internet of Things"],
    "Semester 7": ["Blockchain", "Quantum Computing", "Advanced Networking"],
    "Semester 8": ["Project Management", "Entrepreneurship", "Research Methodology"],
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (title && description && semester && subject && senderName && date && file) {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("semester", semester);
        formData.append("subject", subject);
        formData.append("senderName", senderName);
        formData.append("date", date);
        formData.append("file", file);

        const response = await fetch("http://localhost:5000/api/notes", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Notes uploaded successfully!");
          setTitle("");
          setDescription("");
          setSemester("");
          setSubject("");
          setSenderName("");
          setDate("");
          setFile(null);
        } else {
          alert("Failed to upload notes. Please try again.");
        }
      } catch (err) {
        console.error("Error uploading notes:", err);
        alert("An error occurred while uploading notes.");
      }
    } else {
      alert("Please fill out all fields before uploading.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section: Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Create Notes for {category.toUpperCase()}
          </h1>
          <form onSubmit={handleUpload}>
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter note title"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter note description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Semester */}
            <div className="mb-4">
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Semester
              </label>
              <select
                id="semester"
                value={semester}
                onChange={(e) => {
                  setSemester(e.target.value);
                  setSubject(""); // Reset subject when semester changes
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Semester</option>
                {Object.keys(semesterSubjects).map((sem) => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={!semester} // Disable if no semester is selected
              >
                <option value="">Select Subject</option>
                {semester &&
                  semesterSubjects[semester].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
              </select>
            </div>

            {/* Sender Name */}
            <div className="mb-4">
              <label
                htmlFor="senderName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Sender Name
              </label>
              <input
                id="senderName"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Date */}
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload File
              </label>
              <input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Upload
            </button>
          </form>
        </div>

        {/* Right Section: Illustration or Info */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://dummyimage.com/400x300/cccccc/000000&text=Placeholder"
            alt="Illustration"
            className="mb-6 rounded-lg shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Upload Notes Seamlessly
          </h2>
          <p className="text-gray-600">
            Provide detailed notes for students to help them excel in their studies. Make sure to include all the required information for better organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;