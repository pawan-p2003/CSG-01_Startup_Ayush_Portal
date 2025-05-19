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
import PrivateRoute from "./components/PrivateRoute"; // ✅ Import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profilepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/funding"
          element={
            <PrivateRoute>
              <Funding />
            </PrivateRoute>
          }
        />
        <Route
          path="/mentors"
          element={
            <PrivateRoute>
              <Mentorship />
            </PrivateRoute>
          }
        />
        <Route
          path="/community"
          element={
            <PrivateRoute>
              <Community />
            </PrivateRoute>
          }
        />
        <Route
          path="/fundingsub"
          element={
            <PrivateRoute>
              <FundingSubpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <PrivateRoute>
              <Applications />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
