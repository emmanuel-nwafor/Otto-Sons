import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StatsProvider } from "./StatsContext";
import { BookingProvider } from "./BookingContext";
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import Header from "./components/Header";
import VehicleList from "./components/VehicleList";
import VehicleOverview from "./pages/VehicleOverview";
import ManageBookings from "./pages/ManageBookings";
import BookingHistory from "./pages/BookingHistory";
import VideoWalkthrough from "./pages/VideoWalkthrough";
import PurchasePage from "./pages/PurchasePage";
import PurchaseHistory from "./pages/PurchaseHistory";
import AdminDashboard from "./admin/AdminDashboard ";

// admin pages and components

function App() {
  return (
    <StatsProvider>
      <BookingProvider>
        <Router>
          {/* Public Routes */}
          <Routes>
            <Route path="/" element={<HomeRendering />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />

            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute role="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="manage-bookings"
              element={
                <PrivateRoute requiredRole="admin">
                  <Header />
                  <div className="bg-gray-900 min-h-screen text-white">
                    <ManageBookings />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboardPage"
              element={
                <PrivateRoute requiredRole="user">
                  <Header />
                  <div className="bg-gray-900 min-h-screen text-white">
                    <VehicleList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/vehicles/:id"
              element={
                <PrivateRoute>
                  <VehicleOverview />
                </PrivateRoute>
              }
            />
            <Route
              path="/purchase/:id"
              element={
                <PrivateRoute requiredRole="user">
                  <PurchasePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/purchase-history"
              element={
                <PrivateRoute requiredRole="user">
                  <PurchaseHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/video-walkthrough/:id"
              element={
                <PrivateRoute>
                  <VideoWalkthrough />
                </PrivateRoute>
              }
            />
            <Route
              path="/booking-history"
              element={
                <PrivateRoute requiredRole="user">
                  <BookingHistory />
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
