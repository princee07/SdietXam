import React from "react";

const FilterPanel = () => {
  return (
    <div className="bg-white p-4 mb-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
        <select className="w-full border border-gray-300 rounded-lg p-2">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
          <option>All Time</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select className="w-full border border-gray-300 rounded-lg p-2">
          <option>All Categories</option>
          <option>Quiz Performance</option>
          <option>Assignment Scores</option>
          <option>Project Submissions</option>
        </select>
      </div>
      
      <div className="flex items-end">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;