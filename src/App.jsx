import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Mentor from "./pages/Mentor";
import Practice from "./pages/Practice";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./components/Layout";
import ExamUpdates from "./pages/ExamUpdates";
import Host from "./pages/Host";
import BtechLearn from "./pages/BtechLearn";

import BTechQuiz from "./pages/BTechQuiz";
import SubjectSelection from "./pages/SubjectSelection";
import HostDashboard from "./pages/HostDashboard";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import CreateNotes from "./pages/CreateNotes";
import CreateQuiz from "./pages/CreateQuiz";
const App = () => {
return (
<AuthProvider>
<Router>
<Routes>
{/* Wrap all routes inside Layout to include Navbar on all pages */}
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="courses" element={<Courses />} />
<Route path="/courses/btech-learn" element={<BtechLearn />} />
<Route path="mentor" element={<Mentor />} />
<Route path="practice" element={<Practice />} />
<Route path="/practice/btech" element={<BTechQuiz />} />
<Route path="/quiz/btech/:semId" element={<SubjectSelection />} />
<Route path="leaderboard" element={<Leaderboard />} />
<Route path="/btech-learn" element={<BtechLearn />} />
<Route path="exam-updates" element={<ExamUpdates />} />
<Route path="/host" element={<Host />} />

<Route path="/host-dashboard" element={<HostDashboard />} />
<Route path="/notes" element={<Notes />} />
        <Route path="/notes/create-notes/:category" element={<CreateNotes />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/create-quiz/:category" element={<CreateQuiz />} />
      </Route>
    </Routes>
  </Router>
</AuthProvider>

);
};

export default App;