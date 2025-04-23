import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Dashboard from "./components/Dashboard";
import Profilepage from "./components/Profilepage";
import Funding from "./components/Funding";
import Mentorship from "./components/Mentorship";
import Community from "./components/Community";
import FundingSubpage from "./components/FundingSubpage";
import Applications from "./components/Applications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/mentors" element={<Mentorship />} />
        <Route path="/community" element={<Community />} />
        <Route path="/fundingsub" element={<FundingSubpage />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </Router>
  );
}

export default App;
