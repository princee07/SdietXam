import React from "react";
import { FaTrophy, FaMedal, FaChartLine, FaCalendarAlt, FaCrown } from "react-icons/fa";
import { GiPodium, GiRank1, GiRank2, GiRank3 } from "react-icons/gi";
import { IoMdRibbon } from "react-icons/io";

const TopPerformers = ({ leaderboardData, activeTab }) => {
  // Add error checking
  if (!leaderboardData || !leaderboardData[activeTab] || !Array.isArray(leaderboardData[activeTab])) {
    return (
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Top Performers</h2>
        <p className="text-gray-500">No data available for this program yet.</p>
      </div>
    );
  }

  // Get top 3 performers or fewer if less than 3 entries
  const topPerformers = leaderboardData[activeTab].slice(0, 3);

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg mb-10">
      <div className="absolute top-2 left-2 text-blue-600 opacity-30">
        <GiPodium className="text-6xl" />
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center">
        <FaTrophy className="text-yellow-500 mr-2" /> Top Performers
      </h2>
      
      <div className="flex flex-wrap justify-center items-end">
        {topPerformers.map((performer, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center mx-4 mb-6 transform transition-transform hover:scale-105 ${
              index === 0 ? "order-0 md:order-0 md:-translate-y-4" : 
              index === 1 ? "order-1 md:order-1" : "order-2 md:order-2"
            }`}
          >
            <div className="relative">
              <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${
                index === 0 ? "from-yellow-100 to-yellow-300 border-4 border-gold" : 
                index === 1 ? "from-gray-100 to-gray-200 border-4 border-silver" : 
                "from-orange-100 to-orange-200 border-4 border-bronze"
              } flex items-center justify-center mb-4 shadow-lg`}>
                {index === 0 && <FaCrown className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-yellow-500" />}
                {index !== 0 && <IoMdRibbon className={`absolute top-0 ${index === 1 ? "left-0 transform -translate-x-1/4 -translate-y-1/4 text-silver" : "right-0 transform translate-x-1/4 -translate-y-1/4 text-bronze"} text-4xl`} />}
                <span className={`text-4xl md:text-5xl font-bold ${
                  index === 0 ? "text-gold" : 
                  index === 1 ? "text-silver" : "text-bronze"
                }`}>{index + 1}</span>
              </div>
              <div className={`absolute bottom-2 right-0 ${
                index === 0 ? "bg-gold" : 
                index === 1 ? "bg-silver" : "bg-bronze"
              } text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md`}>
                {index === 0 ? <GiRank1 /> : index === 1 ? <GiRank2 /> : <GiRank3 />}
              </div>
            </div>
            <h3 className="text-xl font-bold">{performer.name}</h3>
            <p className="flex items-center text-gray-600 font-semibold">
              <FaChartLine className="mr-1 text-green-500" /> {performer.score} pts
            </p>
            <div className={`mt-2 px-4 py-1 bg-gradient-to-r ${
              index === 0 ? "from-yellow-400 to-yellow-600" : 
              index === 1 ? "from-silver to-gray-400" : "from-bronze to-orange-700"
            } text-white rounded-full text-sm flex items-center`}>
              <FaMedal className="mr-1" /> {index === 0 ? "Gold" : index === 1 ? "Silver" : "Bronze"}
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" /> Streak: {performer.streak} days
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;