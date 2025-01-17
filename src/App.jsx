import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StatsProvider } from "./StatsContext";
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute"; 
import Error from "./pages/Error";
import TotalCarsPage from "./pages/TotalCarsPage";
import CarsRentedPage from "./pages/CarsRentedPage";
import PendingRepairsPage from "./pages/PendingRepairsPage";
import ActiveUsersPage from "./pages/ActiveUsersPage";

function App() {
  return (
    <StatsProvider>
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomeRendering />} />

          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          
          {/* UNCOMMENT THIS ROUTE WHEN DONE */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<Error />} />

          {/* Individual Stat Pages */}
          <Route path="/dashboard/total-cars" element={<TotalCarsPage />} />
          <Route path="/dashboard/cars-rented" element={<CarsRentedPage />} />
          <Route path="/dashboard/pending-repairs" element={<PendingRepairsPage />} />
          <Route path="/dashboard/active-users" element={<ActiveUsersPage />} />

          {/* Protected Dashboard Route */}

          <Route
            path="/dashboardpage"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
   </StatsProvider>

  );
}

export default App;
