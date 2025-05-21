import React from "react";
import { FaUserFriends, FaArrowUp, FaDumbbell, FaBrain } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";

const StatsSection = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-2">Program Participation</h3>
          <FaUserFriends className="text-3xl opacity-80" />
        </div>
        <p className="text-3xl font-bold">138</p>
        <p className="text-white text-opacity-80 mt-2 flex items-center">
          <FaArrowUp className="mr-1" />
          <span>12% from last month</span>
        </p>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-2">Average Score</h3>
          <IoMdStats className="text-3xl opacity-80" />
        </div>
        <p className="text-3xl font-bold">782</p>
        <p className="text-white text-opacity-80 mt-2 flex items-center">
          <FaArrowUp className="mr-1" />
          <span>8% improvement</span>
        </p>
      </div>
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-2">Top Performer</h3>
          <FaDumbbell className="text-3xl opacity-80" />
        </div>
        <p className="text-3xl font-bold">980</p>
        <p className="text-white text-opacity-80 mt-2 flex items-center">
          <FaBrain className="mr-1" />
          <span>Highest score ever!</span>
        </p>
      </div>
    </div>
  );
};

export default StatsSection;