import React from "react";

const CourseFilter = ({ activeCourse, setActiveCourse }) => {
  const courses = [
    { id: "all", name: "All Courses" },
    { id: "btech", name: "B.Tech" },
    { id: "bca", name: "BCA" },
    { id: "bba", name: "BBA" }
  ];

  return (
    <section className="bg-gray-100 border-t border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-6">
          {courses.map(course => (
            <button 
              key={course.id}
              onClick={() => setActiveCourse(course.id)}
              className={`px-5 py-2 mb-2 rounded-full font-medium transition-colors ${
                activeCourse === course.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFilter;