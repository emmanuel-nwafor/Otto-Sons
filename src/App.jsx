import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StatsProvider } from "./StatsContext";
import { BookingProvider } from "./BookingContext"; // Global booking context
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
// import Search from "./components/Search";
import Error from "./pages/Error";
import Header from "./components/Header";
import VehicleList from "./components/VehicleList";
import VehicleOverview from "./pages/VehicleOverview";
import ManageBookings from "./pages/ManageBookings";
import BookingHistory from "./pages/BookingHistory";
import VideoWalkthrough from "./pages/VideoWalkthrough";

function App() {
  return (
    <StatsProvider>
      <BookingProvider>
        {" "}
        {/* Wrap the app with the BookingProvider */}
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
            {/* Vehicle Overview Route */}
            <Route path="/vehicles/:id" element={<VehicleOverview />} />
            {/* Manage Bookings Route */}
            <Route
              path="/manage-bookings"
              element={
                <PrivateRoute>
                  <Header />
                  <div className="bg-gray-900 min-h-screen text-white">
                    <ManageBookings />
                  </div>
                </PrivateRoute>
              }
            />
            {/* Booking History Route */}
            <Route
              path="/booking-history"
              element={
                <PrivateRoute>
                  <Header />
                  <div className="bg-gray-900 min-h-screen text-white">
                    <BookingHistory />{" "}
                  </div>
                </PrivateRoute>
              }
            />{" "}
            {/*Video walk through Route */}
            <Route
              path="/video-walkthrough/:id"
              element={
                <PrivateRoute>
                  <div className="bg-gray-900 min-h-screen text-white">
                    <VideoWalkthrough />{" "}
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </BookingProvider>
    </StatsProvider>
  );
}

export default App;
