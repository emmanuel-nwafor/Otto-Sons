import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useBooking } from "../BookingContext";
import StatisticsChart from "./StatisticsChart";
import Logo1 from "/src/assets/logo1.png";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [reportsGenerated, setReportsGenerated] = useState(0); // State for reports generated
  const { bookings } = useBooking(); // Access bookings from BookingContext

  // Fetch existing data from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);

    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReportsGenerated(storedReports.length); // Set number of reports generated
  }, []);

  // Function to handle user updates
  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    // Update state and localStorage
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Notify user dashboard of changes
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-700 flex flex-col"
    >
      {/* Header */}
      <header className="bg-gray-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Welcome Admin</h1>
            <img src={Logo1} className="h-14" alt="Logo" />
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bx bx-menu-alt-right text-[25px]"></i>
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`lg:w-64 lg:h-[100vh] p-4 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static fixed top-0 left-0 z-10 h-full w-64 bg-gray-700 text-white p-4`}
        >
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/manage-users"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Manage Users
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-vehicles"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Manage Vehicles
                </Link>
              </li>
              <li>
                <Link
                  to="/view-bookings"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  All Bookings & Purchase
                </Link>
              </li>
              <li>
                <Link
                  to="/generate-reports"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Generate Reports
                </Link>
              </li>
              <button
                className="ml-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  // localStorage.clear();
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold m-1">Statistics</h2>

          {/* Manage Users Section */}
          <section>
            <ul className="space-y-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="bg-white p-4 rounded shadow flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-gray-600">Role: {user.role}</p>
                  </div>
                  <button
                    onClick={() =>
                      handleUpdateUser({ ...user, role: "updatedRole" })
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Update Role
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">{users.length}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Vehicles</h3>
              <p className="text-3xl font-bold text-blue-600">
                {vehicles.length}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Bookings</h3>
              <p className="text-3xl font-bold text-blue-600">
                {bookings.length}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Reports Generated</h3>
              <p className="text-3xl font-bold text-blue-600">
                {reportsGenerated}
              </p>
            </div>
          </div>

          {/* Chart Section */}
          <br />
          <br />
          <StatisticsChart bookings={bookings} users={users} />
        </main>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
