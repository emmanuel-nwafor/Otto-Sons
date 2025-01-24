import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// Motion import
import { motion } from "framer-motion";

// Admin pages and components
import AdminDashboard from "/src/admin/AdminDashboard .jsx";
import ManageUsers from "./admin/ManageUsers";
import ManageVehicles from "./admin/ManageVehicles";
import AdminBookingDetails from "./admin/AdminBookingDetails";
import GenerateReport from "./admin/GenerateReport";
import ViewReport from "/src/admin/ViewReport";
import Download from "/src/admin/Download";

function App() {
  return (
    <BookingProvider>
      {/* Wrap the app with VehicleProvider */}
      <Router>
        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<HomeRendering />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/manage-users"
            element={
              <PrivateRoute role="admin">
                <ManageUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="/manage-vehicles"
            element={
              <PrivateRoute role="admin">
                <ManageVehicles />
              </PrivateRoute>
            }
          />
          <Route
            path="/view-bookings"
            element={
              <PrivateRoute role="admin">
                <AdminBookingDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/generate-reports"
            element={
              <PrivateRoute role="admin">
                <GenerateReport />
              </PrivateRoute>
            }
          />
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/download" element={<Download />} />

          {/* User Routes */}
          <Route
            path="manage-bookings"
            element={
              <PrivateRoute requiredRole="user">
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
              <PrivateRoute role="user">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Header />
                  <div className="bg-gray-900 min-h-screen text-white">
                    <VehicleList />
                  </div>
                </motion.div>
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
              <PrivateRoute>
                <div className="bg-gray-900 min-h-screen text-white">
                  <BookingHistory />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
