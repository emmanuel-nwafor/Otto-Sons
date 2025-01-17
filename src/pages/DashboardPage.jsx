import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DashboardPage() {
  const [stats, setStats] = useState({
    totalCars: 50,
    carsRented: 25,
    pendingRepairs: 10,
    activeUsers: 100,
  });

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Replace with real API calls if needed
      const data = {
        totalCars: Math.floor(Math.random() * 230),
        carsRented: Math.floor(Math.random() * 100),
        pendingRepairs: Math.floor(Math.random() * 150),
        activeUsers: Math.floor(Math.random() * 200),
      };
      setStats(data);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Otto-Sons Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Cars"
          value={stats.totalCars}
          link="/dashboard/total-cars"
        />
        <StatCard
          title="Cars Rented"
          value={stats.carsRented}
          link="/dashboard/cars-rented"
        />
        <StatCard
          title="Pending Repairs"
          value={stats.pendingRepairs}
          link="/dashboard/pending-repairs"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          link="/dashboard/active-users"
        />
      </div>

      {/* Recent Activities */}
      <section className="p-1 mt-3">
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

    </motion.div>
  );
}

function StatCard({ title, value, link }) {
  return (
    <Link
      to={link}
      className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-4">{value}</p>
    </Link>
  );
}

export default DashboardPage;
