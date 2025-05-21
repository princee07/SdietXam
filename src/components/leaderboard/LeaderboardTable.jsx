import React from "react";
import { 
  FaSort, FaUserGraduate, FaChartLine, FaBook, FaCalendarAlt, 
  FaRegLightbulb, FaArrowUp, FaTrophy, FaMedal
} from "react-icons/fa";
import { GiAchievement, GiStarMedal } from "react-icons/gi";

const LeaderboardTable = ({ leaderboardData, activeTab, sortBy, highlightNewEntry = null }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                <div className="flex items-center">
                  <FaSort className="mr-2" />
                  Rank
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                <div className="flex items-center">
                  <FaUserGraduate className="mr-2" />
                  Name
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                <div className="flex items-center">
                  <FaChartLine className="mr-2" />
                  Score
                </div>
              </th>
              {activeTab === "btech" && (
                <>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaBook className="mr-2" />
                      Course
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      Year
                    </div>
                  </th>
                </>
              )}
              {(activeTab === "bca" || activeTab === "bba") && (
                <>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      Semester
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <FaRegLightbulb className="mr-2" />
                      Specialization
                    </div>
                  </th>
                </>
              )}
              <th 
                scope="col" 
                className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                <div className="flex items-center">
                  <GiAchievement className="mr-2" />
                  Badges
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData[activeTab].map((student) => {
              const isNewEntry = highlightNewEntry && 
                student.name === highlightNewEntry.name && 
                student.score === highlightNewEntry.score;
                
              const isHighlighted = highlightNewEntry && 
                highlightNewEntry.name === student.name && 
                highlightNewEntry.course === activeTab;

              return (
                <tr 
                  key={student.rank} 
                  className={`${
                    isNewEntry ? 'bg-blue-100 border-l-4 border-blue-500' : 
                    student.rank === 1 ? 'bg-yellow-50' : 
                    student.rank === 2 ? 'bg-gray-50' : 
                    student.rank === 3 ? 'bg-orange-50' : ''
                  } ${isHighlighted ? 'bg-yellow-100 animate-pulse' : ''} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {student.rank === 1 && (
                        <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-center flex items-center justify-center mr-2 shadow-md">
                          <FaTrophy />
                        </span>
                      )}
                      {student.rank === 2 && (
                        <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white text-center flex items-center justify-center mr-2 shadow-md">
                          <FaMedal />
                        </span>
                      )}
                      {student.rank === 3 && (
                        <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-700 text-white text-center flex items-center justify-center mr-2 shadow-md">
                          <FaMedal />
                        </span>
                      )}
                      {student.rank > 3 && (
                        <span className="inline-block w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-center flex items-center justify-center mr-2">
                          {student.rank}
                        </span>
                      )}
                      <span className="font-medium">{student.rank}</span>
                      {isNewEntry && (
                        <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 flex items-center">
                      <span className="inline-block w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                        <FaUserGraduate />
                      </span>
                      {student.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900 flex items-center">
                      <span className={`inline-flex items-center ${
                        student.rank <= 3 ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {student.score}
                        <span className={`ml-1 ${
                          student.rank <= 3 ? 'text-green-600' : 'text-green-500'
                        }`}>
                          <FaArrowUp />
                        </span>
                      </span>
                    </div>
                  </td>
                  {activeTab === "btech" && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaBook className="mr-1 text-blue-500" />
                          {student.course}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaCalendarAlt className="mr-1 text-gray-500" />
                          {student.year}
                        </div>
                      </td>
                    </>
                  )}
                  {(activeTab === "bca" || activeTab === "bba") && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaCalendarAlt className="mr-1 text-gray-500" />
                          {student.semester}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaRegLightbulb className="mr-1 text-yellow-500" />
                          {student.specialization}
                        </div>
                      </td>
                    </>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GiStarMedal className="text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{student.badges}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;