import React, { useState } from "react";

const BTechLearn = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [selectedCategory, setSelectedCategory] = useState("Notes");
  const [searchTerm, setSearchTerm] = useState("");

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
  const categories = ["Notes", "Assignments", "Projects"];

  const content = {
    Notes: [
      {
        id: 1,
        title: "Mathematics Notes",
        subject: "Mathematics",
        semester: "Semester 1",
      },
      {
        id: 2,
        title: "Physics Notes",
        subject: "Physics",
        semester: "Semester 1",
      },
      {
        id: 3,
        title: "Data Structures Notes",
        subject: "Data Structures",
        semester: "Semester 2",
      },
    ],
    Assignments: [
      {
        id: 4,
        title: "Mathematics Assignment",
        subject: "Mathematics",
        semester: "Semester 1",
      },
      {
        id: 5,
        title: "Digital Logic Assignment",
        subject: "Digital Logic",
        semester: "Semester 2",
      },
    ],
    Projects: [
      {
        id: 6,
        title: "Physics Project",
        subject: "Physics",
        semester: "Semester 1",
      },
      {
        id: 7,
        title: "Data Structures Project",
        subject: "Data Structures",
        semester: "Semester 2",
      },
    ],
  };

  const filteredContent = content[selectedCategory].filter(
    (item) =>
      item.semester === selectedSemester &&
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
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

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-4 py-3 mb-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-3/4 ml-6">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={`Search ${selectedCategory.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.length > 0 ? (
              filteredContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-blue-600">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Subject: {item.subject}
                    </p>
                    <p className="text-gray-600">Semester: {item.semester}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No content found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTechLearn;
