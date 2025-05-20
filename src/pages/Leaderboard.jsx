import React, { useState } from "react";
import { 
  FaTrophy, FaMedal, FaGraduationCap, FaLaptopCode, FaBriefcase, 
  FaUserGraduate, FaChartLine, FaStar, FaAward, FaCrown, 
  FaSearch, FaSort, FaFilter, FaCalendarAlt, FaUserFriends,
  FaArrowUp, FaArrowDown, FaDumbbell, FaBrain, FaRegLightbulb,
  FaBook // Add this import
} from "react-icons/fa";
import { 
  GiPodium, GiRank1, GiRank2, GiRank3, GiLaurelsTrophy, 
  GiAchievement, GiStarMedal
} from "react-icons/gi";
import { IoMdRibbon, IoMdStats } from "react-icons/io";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("btech");
  const [sortBy, setSortBy] = useState("rank");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample data for each program
  const leaderboardData = {
    btech: [
      { rank: 1, name: "Raj Kumar", score: 980, course: "Computer Science", year: "4th", badges: 8, streak: 42 },
      { rank: 2, name: "Priya Singh", score: 945, course: "Electronics", year: "3rd", badges: 7, streak: 38 },
      { rank: 3, name: "Aditya Sharma", score: 920, course: "Mechanical", year: "4th", badges: 6, streak: 35 },
      { rank: 4, name: "Neha Gupta", score: 905, course: "Civil", year: "2nd", badges: 6, streak: 31 },
      { rank: 5, name: "Vivek Patel", score: 890, course: "Computer Science", year: "3rd", badges: 5, streak: 28 },
      { rank: 6, name: "Sonia Khan", score: 875, course: "Electronics", year: "4th", badges: 5, streak: 26 },
      { rank: 7, name: "Rahul Verma", score: 860, course: "Mechanical", year: "2nd", badges: 4, streak: 24 },
      { rank: 8, name: "Ananya Joshi", score: 850, course: "Civil", year: "3rd", badges: 4, streak: 22 },
      { rank: 9, name: "Karan Mehta", score: 835, course: "Computer Science", year: "2nd", badges: 3, streak: 19 },
      { rank: 10, name: "Divya Sharma", score: 820, course: "Electronics", year: "4th", badges: 3, streak: 17 },
    ],
    bca: [
      { rank: 1, name: "Amit Kumar", score: 950, semester: "6th", specialization: "Web Development", badges: 9, streak: 40 },
      { rank: 2, name: "Sneha Patel", score: 925, semester: "5th", specialization: "Data Science", badges: 8, streak: 37 },
      { rank: 3, name: "Rohan Singh", score: 900, semester: "6th", specialization: "Cybersecurity", badges: 7, streak: 33 },
      { rank: 4, name: "Pooja Verma", score: 880, semester: "4th", specialization: "Mobile Apps", badges: 6, streak: 29 },
      { rank: 5, name: "Vikram Joshi", score: 865, semester: "5th", specialization: "Web Development", badges: 5, streak: 25 },
      { rank: 6, name: "Nisha Gupta", score: 845, semester: "6th", specialization: "Data Science", badges: 5, streak: 23 },
      { rank: 7, name: "Suresh Kumar", score: 830, semester: "4th", specialization: "Cybersecurity", badges: 4, streak: 21 },
      { rank: 8, name: "Anjali Sharma", score: 815, semester: "5th", specialization: "Mobile Apps", badges: 4, streak: 18 },
      { rank: 9, name: "Deepak Yadav", score: 800, semester: "6th", specialization: "Web Development", badges: 3, streak: 16 },
      { rank: 10, name: "Kavita Singh", score: 785, semester: "4th", specialization: "Data Science", badges: 3, streak: 14 },
    ],
    bba: [
      { rank: 1, name: "Manish Sharma", score: 940, semester: "6th", specialization: "Marketing", badges: 8, streak: 39 },
      { rank: 2, name: "Anjali Patel", score: 915, semester: "5th", specialization: "Finance", badges: 7, streak: 34 },
      { rank: 3, name: "Sanjay Mehta", score: 890, semester: "6th", specialization: "Human Resources", badges: 7, streak: 32 },
      { rank: 4, name: "Ritu Agarwal", score: 875, semester: "4th", specialization: "Marketing", badges: 6, streak: 28 },
      { rank: 5, name: "Manoj Kumar", score: 855, semester: "5th", specialization: "Finance", badges: 5, streak: 25 },
      { rank: 6, name: "Preeti Singh", score: 840, semester: "6th", specialization: "Human Resources", badges: 5, streak: 22 },
      { rank: 7, name: "Rakesh Verma", score: 825, semester: "4th", specialization: "Marketing", badges: 4, streak: 20 },
      { rank: 8, name: "Meena Gupta", score: 810, semester: "5th", specialization: "Finance", badges: 4, streak: 17 },
      { rank: 9, name: "Vijay Sharma", score: 795, semester: "6th", specialization: "Human Resources", badges: 3, streak: 15 },
      { rank: 10, name: "Sunita Jain", score: 780, semester: "4th", specialization: "Marketing", badges: 3, streak: 13 },
    ],
  };

  // Labels for each program
  const programLabels = {
    btech: { icon: <FaGraduationCap />, label: "BTech", color: "blue" },
    bca: { icon: <FaLaptopCode />, label: "BCA", color: "purple" },
    bba: { icon: <FaBriefcase />, label: "BBA", color: "green" },
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-white">
      {/* Page Header with animated trophy icon */}
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

      {/* Search and Filter Bar */}
      <div className="flex flex-wrap items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="relative w-full md:w-auto mb-4 md:mb-0">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search student..." 
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
      
      {/* Filter panel (conditionally shown) */}
      {filterOpen && (
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
      )}

      {/* Program Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-8">
        {Object.keys(programLabels).map(key => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center justify-center space-x-2 px-6 py-4 text-lg font-medium rounded-t-lg transition-all ${
              activeTab === key
                ? `bg-${programLabels[key].color}-600 text-white`
                : `bg-gray-100 text-gray-700 hover:bg-gray-200`
            } mb-2 sm:mb-0 mx-1 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            <span className="text-xl">{programLabels[key].icon}</span>
            <span>{programLabels[key].label}</span>
          </button>
        ))}
      </div>

      {/* Top 3 Section with Podium */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg mb-10">
        <div className="absolute top-2 left-2 text-blue-600 opacity-30">
          <GiPodium className="text-6xl" />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center">
          <FaTrophy className="text-yellow-500 mr-2" /> Top Performers
        </h2>
        
        <div className="flex flex-wrap justify-center items-end">
          {/* Second Place */}
          <div className="flex flex-col items-center mx-4 mb-6 order-1 md:order-1 transform transition-transform hover:scale-105">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-silver flex items-center justify-center mb-4 shadow-lg">
                <IoMdRibbon className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 text-4xl text-silver" />
                <span className="text-4xl md:text-5xl font-bold text-silver">2</span>
              </div>
              <div className="absolute bottom-2 right-0 bg-silver text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                <GiRank2 />
              </div>
            </div>
            <h3 className="text-xl font-bold">{leaderboardData[activeTab][1].name}</h3>
            <p className="flex items-center text-gray-600 font-semibold">
              <FaChartLine className="mr-1 text-green-500" /> {leaderboardData[activeTab][1].score} pts
            </p>
            <div className="mt-2 px-4 py-1 bg-gradient-to-r from-silver to-gray-400 text-white rounded-full text-sm flex items-center">
              <FaMedal className="mr-1" /> Silver
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" /> Streak: {leaderboardData[activeTab][1].streak} days
            </div>
          </div>

          {/* First Place */}
          <div className="flex flex-col items-center mx-4 mb-6 order-0 md:order-0 transform md:-translate-y-4 transition-transform hover:scale-105">
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 border-4 border-gold flex items-center justify-center mb-4 shadow-lg">
                <FaCrown className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-yellow-500" />
                <span className="text-5xl md:text-6xl font-bold text-gold">1</span>
              </div>
              <div className="absolute bottom-2 right-0 bg-gold text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                <GiRank1 />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{leaderboardData[activeTab][0].name}</h3>
            <p className="flex items-center text-gray-600 font-semibold">
              <FaChartLine className="mr-1 text-green-500" /> {leaderboardData[activeTab][0].score} pts
            </p>
            <div className="mt-2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full text-sm flex items-center">
              <FaTrophy className="mr-1" /> Gold
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" /> Streak: {leaderboardData[activeTab][0].streak} days
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center mx-4 mb-6 order-2 md:order-2 transition-transform hover:scale-105">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border-4 border-bronze flex items-center justify-center mb-4 shadow-lg">
                <IoMdRibbon className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-4xl text-bronze" />
                <span className="text-4xl md:text-5xl font-bold text-bronze">3</span>
              </div>
              <div className="absolute bottom-2 right-0 bg-bronze text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                <GiRank3 />
              </div>
            </div>
            <h3 className="text-xl font-bold">{leaderboardData[activeTab][2].name}</h3>
            <p className="flex items-center text-gray-600 font-semibold">
              <FaChartLine className="mr-1 text-green-500" /> {leaderboardData[activeTab][2].score} pts
            </p>
            <div className="mt-2 px-4 py-1 bg-gradient-to-r from-bronze to-orange-700 text-white rounded-full text-sm flex items-center">
              <FaMedal className="mr-1" /> Bronze
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" /> Streak: {leaderboardData[activeTab][2].streak} days
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
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
              {leaderboardData[activeTab].map((student) => (
                <tr 
                  key={student.rank} 
                  className={`${
                    student.rank === 1 ? 'bg-yellow-50' : 
                    student.rank === 2 ? 'bg-gray-50' : 
                    student.rank === 3 ? 'bg-orange-50' : ''
                  } hover:bg-blue-50 transition-colors`}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Section */}
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

      {/* Motivational Quote */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md text-center">
        <FaAward className="text-4xl text-blue-500 mx-auto mb-4" />
        <p className="text-xl text-gray-700 italic">
          "The secret of success is to do the common things uncommonly well."
        </p>
        <p className="text-gray-500 mt-2">— John D. Rockefeller</p>
      </div>
    </div>
    </>
  
  );
};

export default Leaderboard;