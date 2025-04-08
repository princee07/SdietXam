import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Mentor from "./pages/Mentor";
import Practice from "./pages/Practice";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./components/Layout";
import ExamUpdates from "./pages/ExamUpdates";
import Host from "./pages/Host";
import BtechLearn from "./pages/BtechLearn";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside Layout to include Navbar on all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="/courses/btech-learn" element={<BtechLearn />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="practice" element={<Practice />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="/btech-learn" element={<BtechLearn />} />
          <Route path="exam-updates" element={<ExamUpdates />} />
          <Route path="/host" element={<Host />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
