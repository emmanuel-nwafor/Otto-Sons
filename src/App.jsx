<Header />;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StatsProvider } from "./StatsContext";
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import Header from "./components/Header"; // New Component
import VehicleList from "./components/VehicleList"; // New Component
import VehicleOverview from "./pages/VehicleOverview";

function App() {
  return (
    <StatsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRendering />} />

          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboardpage"
            element={
              <PrivateRoute>
                <Header />
                <div className="bg-gray-900 min-h-screen flex text-white">
                  <main className="flex">
                    <VehicleList />
                  </main>
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/vehicles/:id" element={<VehicleOverview />} />
        </Routes>
      </Router>
    </StatsProvider>
  );
}

export default App;
