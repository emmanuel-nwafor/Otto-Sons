import React from "react";
import { Link } from "react-router-dom";
import { useStats } from "../StatsContext";

function DashboardPage() {
  const { stats } = useStats();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
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
    </div>
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
