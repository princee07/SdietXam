import React from "react";
import { FaBook, FaFileAlt, FaRegFileAlt, FaLaptopCode } from "react-icons/fa";

const CategorySelector = ({ activeTab, setActiveTab }) => {
  const categories = [
    {
      id: "notes",
      name: "Handwritten Notes",
      description: "Detailed notes for better understanding",
      icon: <FaBook className="text-blue-500 text-4xl" />
    },
    {
      id: "assignment",
      name: "Assignment Solutions",
      description: "Perfectly solved assignments",
      icon: <FaFileAlt className="text-green-500 text-4xl" />
    },
    {
      id: "sample_paper",
      name: "Sample Papers",
      description: "Practice with solved sample papers",
      icon: <FaRegFileAlt className="text-amber-500 text-4xl" />
    },
    {
      id: "project",
      name: "Projects",
      description: "Complete ready-to-submit projects",
      icon: <FaLaptopCode className="text-purple-500 text-4xl" />
    }
  ];

  return (
    <section className="py-16 bg-white" id="buy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
            Browse Categories
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What are you looking for?</h2>
          <p className="text-gray-600">Browse by category to find exactly what you need</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div 
              key={category.id}
              onClick={() => setActiveTab(category.id)} 
              className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all cursor-pointer transform hover:-translate-y-1 ${
                activeTab === category.id ? "border-blue-500" : "border-transparent"
              }`}
            >
              <div className="mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center">{category.name}</h3>
              <p className="text-gray-600 text-center mt-2">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => setActiveTab("all")} 
            className={`px-6 py-2 rounded-full ${
              activeTab === "all" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;