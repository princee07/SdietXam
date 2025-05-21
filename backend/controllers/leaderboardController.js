import QuizResult from "../models/QuizResult.js";

// Get leaderboard data
export const getLeaderboard = async (req, res) => {
  try {
    console.log("Fetching leaderboard data"); // Add logging
    
    // Get all quiz results
    const allResults = await QuizResult.find().sort({ score: -1 });
    console.log(`Found ${allResults.length} results`); // Add logging
    
    // Separate results by course
    const btech = [];
    const bca = [];
    const bba = [];
    const computerScience = []; // Add this for the new enum value
    
    // Process results by course
    allResults.forEach(result => {
      // Create a simplified object for the leaderboard
      const leaderboardEntry = {
        name: result.name,
        score: result.score,
        badges: result.badges,
        streak: result.streak
      };
      
      // Add course-specific fields
      const courseLower = result.course.toLowerCase();
      if (courseLower === 'btech') {
        leaderboardEntry.course = 'Computer Science';
        leaderboardEntry.year = result.year || '1st';
        btech.push(leaderboardEntry);
      } else if (courseLower === 'computer science') {
        // Handle the new course value
        leaderboardEntry.course = 'Computer Science';
        leaderboardEntry.year = result.year || '1st';
        btech.push(leaderboardEntry); // Add to btech as well
      } else if (courseLower === 'bca') {
        leaderboardEntry.semester = result.semester || '1st';
        leaderboardEntry.specialization = result.specialization || 'Web Development';
        bca.push(leaderboardEntry);
      } else if (courseLower === 'bba') {
        leaderboardEntry.semester = result.semester || '1st';
        leaderboardEntry.specialization = result.specialization || 'Marketing';
        bba.push(leaderboardEntry);
      }
    });
    
    // Assign ranks to each course group
    const assignRanks = (entries) => {
      return entries
        .sort((a, b) => b.score - a.score)
        .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
    };
    
    const response = {
      btech: assignRanks(btech),
      bca: assignRanks(bca),
      bba: assignRanks(bba)
    };
    
    console.log(`Sending back: btech(${response.btech.length}), bca(${response.bca.length}), bba(${response.bba.length})`); // Add logging
    
    // Send formatted leaderboard data
    res.json(response);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: 'Server error' });
  }
};