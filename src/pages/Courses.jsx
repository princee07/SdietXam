import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600">Courses</h1>
      <p className="mt-4 text-gray-700">
        Explore a variety of courses designed to help you upskill and achieve your goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-blue-600">Course 1</h2>
          <p className="mt-2 text-gray-600">Description of Course 1.</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-blue-600">Course 2</h2>
          <p className="mt-2 text-gray-600">Description of Course 2.</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-blue-600">Course 3</h2>
          <p className="mt-2 text-gray-600">Description of Course 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;