import React from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Upload Notes for B.Tech, BCA, and BBA
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* B.Tech Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">B.Tech</h2>
          <p className="text-gray-600 mb-6">
            Upload notes for B.Tech students, covering all semesters and subjects.
          </p>
          <button
            onClick={() => navigate("/create-notes/btech")}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Notes
          </button>
        </div>

        {/* BCA Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">BCA</h2>
          <p className="text-gray-600 mb-6">
            Upload notes for BCA students, covering programming, databases, and more.
          </p>
          <button
            onClick={() => navigate("/create-notes/bca")}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Notes
          </button>
        </div>

        {/* BBA Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">BBA</h2>
          <p className="text-gray-600 mb-6">
            Upload notes for BBA students, designed to help them excel in their studies.
          </p>
          <button
            onClick={() => navigate("/create-notes/bba")}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Create Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;