import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeaderboardHeader from "../components/leaderboard/LeaderboardHeader";
import SearchFilterBar from "../components/leaderboard/SearchFilterBar";
import FilterPanel from "../components/leaderboard/FilterPanel";
import TopPerformers from "../components/leaderboard/TopPerformers";
import LeaderboardTable from "../components/leaderboard/LeaderboardTable";
import StatsSection from "../components/leaderboard/StatsSection";
import MotivationalQuote from "../components/leaderboard/MotivationalQuote";
// We'll use this structure but will replace with real data
import { programLabels } from "../data/leaderboardData";

const Leaderboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("btech");
  const [sortBy, setSortBy] = useState("rank");
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightNewEntry, setHighlightNewEntry] = useState(null);
  // Initialize with empty structure instead of dummy data
  const [leaderboardData, setLeaderboardData] = useState({
    btech: [],
    bca: [],
    bba: []
  });
  const [loading, setLoading] = useState(true);
  
  // Fetch leaderboard data when component mounts
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/leaderboard");
        if (response.ok) {
          const data = await response.json();
          // Make sure the data has the right structure
          const formattedData = {
            btech: Array.isArray(data.btech) ? data.btech : [],
            bca: Array.isArray(data.bca) ? data.bca : [],
            bba: Array.isArray(data.bba) ? data.bba : []
          };
          setLeaderboardData(formattedData);
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
    
    // Check for state passed from quiz submission
    if (location.state?.newEntry) {
      const { name, score, course } = location.state.newEntry;
      // Highlight the new entry that was just added
      setHighlightNewEntry({ name, score, course });
      setActiveTab(course);
      
      // Clear highlight after 5 seconds
      setTimeout(() => {
        setHighlightNewEntry(null);
      }, 5000);
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-white">
      <LeaderboardHeader />
      
      <SearchFilterBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      
      {filterOpen && <FilterPanel />}
      
      {/* Program Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-8">
        {Object.keys(programLabels).map(key => {
          const IconComponent = programLabels[key].icon;
          
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center justify-center space-x-2 px-6 py-4 text-lg font-medium rounded-t-lg transition-all ${
                activeTab === key
                  ? `bg-${programLabels[key].color}-600 text-white`
                  : `bg-gray-100 text-gray-700 hover:bg-gray-200`
              } mb-2 sm:mb-0 mx-1 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              <span className="text-xl"><IconComponent /></span>
              <span>{programLabels[key].label}</span>
            </button>
          );
        })}
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading leaderboard data...</p>
        </div>
      ) : (
        <>
          <TopPerformers 
            leaderboardData={leaderboardData}
            activeTab={activeTab}
          />
          
          <LeaderboardTable 
            leaderboardData={leaderboardData}
            activeTab={activeTab}
            sortBy={sortBy}
            highlightNewEntry={highlightNewEntry}
          />
        </>
      )}
      
      <StatsSection />
      
      <MotivationalQuote />
    </div>
  );
};

export default Leaderboard;