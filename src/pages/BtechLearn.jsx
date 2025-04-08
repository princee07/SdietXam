import React, { useState } from "react";

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

const notesData = [
  {
    semester: "Semester 1",
    title: "Math Notes",
    uploader: "Aman Kumar",
    url: "/pdfs/semester1-math.pdf",
  },
  {
    semester: "Semester 2",
    title: "Physics Notes",
    uploader: "Riya Sharma",
    url: "/pdfs/semester2-physics.pdf",
  },
  // Add more notes as needed
];

const BtechLearn = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  const filteredNotes = notesData.filter(
    (note) => note.semester === selectedSemester
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
     

        <div className="mt-8">
          <h3 className="font-semibold text-gray-700 mb-2">Choose Semester</h3>
          <select
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {selectedSemester} Notes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {note.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Uploaded by: <span className="font-medium">{note.uploader}</span>
              </p>
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BtechLearn;
