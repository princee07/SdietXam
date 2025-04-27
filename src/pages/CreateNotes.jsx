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

  const handleUpload = (e) => {
    e.preventDefault();
    if (title && description && semester && subject && senderName && date && file) {
      console.log({
        category,
        title,
        description,
        semester,
        subject,
        senderName,
        date,
        fileName: file.name,
      });
      setTitle("");
      setDescription("");
      setSemester("");
      setSubject("");
      setSenderName("");
      setDate("");
      setFile(null);
      alert(`Note for ${category.toUpperCase()} uploaded successfully!`);
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
                onChange={(e) => setSemester(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Semester</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
                <option value="7">Semester 7</option>
                <option value="8">Semester 8</option>
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
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject name"
                required
              />
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
            src="https://via.placeholder.com/400x300"
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