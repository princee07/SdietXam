import React from "react";
import { FaSearch, FaFilter, FaSort } from "react-icons/fa";

const SearchFilterBar = ({ searchTerm, setSearchTerm, filterOpen, setFilterOpen, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-md">
      <div className="relative w-full md:w-auto mb-4 md:mb-0">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search student..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
        >
          <FaFilter className="text-gray-600" />
          <span>Filters</span>
        </button>
        
        <button 
          onClick={() => setSortBy(sortBy === "rank" ? "score" : "rank")}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
        >
          <FaSort className="text-gray-600" />
          <span>Sort by {sortBy === "rank" ? "Score" : "Rank"}</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;