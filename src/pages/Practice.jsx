import React from "react";

const Practice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600">Practice</h1>
      <p className="mt-4 text-gray-700">
        Hone your skills by solving practice problems and challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-blue-600">Problem 1</h2>
          <p className="mt-2 text-gray-600">Description of Problem 1.</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-blue-600">Problem 2</h2>
          <p className="mt-2 text-gray-600">Description of Problem 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Practice;