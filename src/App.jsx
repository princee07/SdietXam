import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Mentor from "./pages/Mentor";
import Practice from "./pages/Practice";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./components/Layout";
import ExamUpdates from "./pages/ExamUpdates";
import Market from "./pages/Market";
import BtechLearn from "./pages/BtechLearn";
import BTechQuiz from "./pages/BTechQuiz";
import HostDashboard from "./pages/HostDashboard";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import CreateNotes from "./pages/CreateNotes";
import CreateQuiz from "./pages/CreateQuiz";
import SubjectSelection from "./pages/SubjectSelection";
import QuizPage from "./pages/QuizPage";
import HostProfile from "./pages/HostProfile";
import { HostRoute } from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/courses/btech-learn" element={<BtechLearn />} />
        <Route path="mentor" element={<Mentor />} />
        <Route path="practice" element={<Practice />} />
        <Route path="/practice/btech" element={<BTechQuiz />} />
        <Route path="/quiz/start" element={<QuizPage />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="/btech-learn" element={<BtechLearn />} />
        <Route path="exam-updates" element={<ExamUpdates />} />
        <Route path="/market" element={<Market />} />
        <Route path="/practice/btech/subject-selection" element={<SubjectSelection />} />
        
        {/* Protected host routes */}
        <Route element={<HostRoute />}>
          <Route path="/host-dashboard" element={<HostDashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/create-notes/:category" element={<CreateNotes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/create-quiz/:category" element={<CreateQuiz />} />
          <Route path="/host-profile" element={<HostProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;