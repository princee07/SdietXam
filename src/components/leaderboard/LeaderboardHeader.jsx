import React from "react";
import { FaStar } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";

const LeaderboardHeader = () => {
  return (
    <div className="text-center mb-10 relative">
      <div className="inline-block animate-bounce mb-4">
        <GiLaurelsTrophy className="text-6xl text-yellow-500" />
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Academic Leaderboard</h1>
      <p className="text-lg text-gray-600">Recognizing excellence across all programs</p>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-10 hidden lg:block">
        <FaStar className="text-4xl text-yellow-300 opacity-60" />
      </div>
      <div className="absolute bottom-0 right-10 hidden lg:block">
        <FaStar className="text-4xl text-yellow-300 opacity-60" />
      </div>
    </div>
  );
};

export default LeaderboardHeader;