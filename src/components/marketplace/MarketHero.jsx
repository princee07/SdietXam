import React, { useEffect, useState } from "react";
import { 
  FaSearch, FaBook, FaPencilAlt, FaFileAlt, 
  FaLaptopCode, FaUserGraduate, FaChartLine 
} from "react-icons/fa";

const MarketHero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  const handleSearch = () => {
    onSearch && onSearch({ searchTerm, category });
  };

  return (
    <section className="pt-28 pb-20 relative z-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-20"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
              <span className="text-sm font-medium text-white">SDIET Student Marketplace</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Your Academic <span className="text-yellow-300">Success</span> Marketplace
          </h1>
          
          <p className="text-xl mb-8 text-blue-100">
            Buy, sell and hire talent for assignments, projects, notes and more
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
            <a href="#buy" className="bg-white text-indigo-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center">
              <FaBook className="mr-2" /> Browse Materials
            </a>
            <a href="#sell" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center">
              <FaPencilAlt className="mr-2" /> Sell Your Work
            </a>
            <a href="#hire" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 hover:from-yellow-500 hover:to-yellow-600 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center">
              <FaUserGraduate className="mr-2" /> Hire Help
            </a>
          </div>
          
          <div className="bg-white p-3 rounded-xl shadow-2xl flex flex-col md:flex-row">
            <div className="flex-1 flex items-center px-3 py-2">
              <FaSearch className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-800 focus:outline-none"
              />
            </div>
            <div className="md:w-48 py-2 px-3">
              <select 
                className="w-full text-gray-800 py-2 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="notes">Notes</option>
                <option value="assignment">Assignments</option>
                <option value="sample_paper">Sample Papers</option>
                <option value="project">Projects</option>
                <option value="hire">Assignment Help</option>
              </select>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition md:rounded-l-none"
            >
              Search
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-10 text-white">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                <FaBook className="text-2xl" />
              </div>
              <span>1000+ Notes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                <FaFileAlt className="text-2xl" />
              </div>
              <span>500+ Papers</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                <FaLaptopCode className="text-2xl" />
              </div>
              <span>200+ Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                <FaUserGraduate className="text-2xl" />
              </div>
              <span>100+ Experts</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default MarketHero;