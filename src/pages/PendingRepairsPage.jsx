import React from "react";
import { useStats } from "../StatsContext";
import { Link } from "react-router-dom";

function PendingRepairsPage() {
  const stats = useStats();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Pending Repairs</h1>
      <p className="text-lg">
        Number of Cars in the Inventory: {stats.pendingRepairs}
      </p>
      <Link
        to="/dashboardPage"
        className="mt-6 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default PendingRepairsPage;
