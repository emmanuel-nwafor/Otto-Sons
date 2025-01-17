import React from "react";
import { motion } from "framer-motion"; // Import for animations
import { useNavigate } from "react-router-dom";

function DashboardReplicate() {
  const navigate = useNavigate();

  // Dummy stats for the dashboard
  const stats = [
    { label: "Total Cars Available", value: 120 },
    { label: "Cars Rented Today", value: 45 },
    { label: "Pending Repairs", value: 15 },
    { label: "Active Users", value: 340 },
  ];

  return (
    <>
      <button
        onClick={() => navigate("/login")}
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        Logout
      </button>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">{stat.label}</h3>
            <p className="text-4xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Recent Activities */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <div className="bg-gray-800 p-4 rounded shadow-md">
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span>User John rented a Toyota Corolla</span>
              <span className="text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span>Car Honda Accord returned from repair</span>
              <span className="text-gray-400">5 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span>User Emily scheduled a repair for Audi A6</span>
              <span className="text-gray-400">1 day ago</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => navigate("/cars")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded shadow-md w-full text-center font-semibold"
          >
            Manage Cars
          </button>
          <button
            onClick={() => navigate("/repairs")}
            className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded shadow-md w-full text-center font-semibold"
          >
            View Repairs
          </button>
          <button
            onClick={() => navigate("/users")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded shadow-md w-full text-center font-semibold"
          >
            User Management
          </button>
          <button
            onClick={() => navigate("/reports")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-4 px-6 rounded shadow-md w-full text-center font-semibold"
          >
            View Reports
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4 mt-8">
        <p>Otto-Sons &copy; 2025. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default DashboardReplicate;
