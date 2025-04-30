import React, { useState, useEffect } from "react";

const BTechLearn = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

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

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/notes?semester=${selectedSemester}&subject=${searchTerm}`
        );
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };

    fetchNotes();
  }, [selectedSemester, searchTerm]);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Dropdown for Semester Selection */}
      <div className="mb-6">
        <label
          htmlFor="semester"
          className="block text-lg font-semibold mb-2 text-gray-700"
        >
          Select Semester:
        </label>
        <select
          id="semester"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-600">{note.title}</h3>
                <p className="text-gray-600 mt-2">Subject: {note.subject}</p>
                <p className="text-gray-600">Semester: {note.semester}</p>
                <p className="text-gray-600">Uploaded by: {note.senderName}</p>
                <p className="text-gray-600">Date: {new Date(note.date).toLocaleDateString()}</p>
                {note.fileName && (
                  <a
                    href={`http://localhost:5000/uploads/${note.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mt-2 block"
                  >
                    Download File
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No notes found for the selected semester.
          </p>
        )}
      </div>
    </div>
  );
};

export default BTechLearn;