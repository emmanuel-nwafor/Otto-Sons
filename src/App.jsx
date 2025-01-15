import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomeRendering />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
