import React from "react";
import { useStats } from "../StatsContext";
import { Link } from "react-router-dom";

function TotalCarsPage() {
  const { stats } = useStats();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Total Cars</h1>
      <p className="text-lg mb-6">
        Number of Cars in the Inventory: {stats.totalCars}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.cars.map((car) => (
          <div key={car.id} className="bg-gray-800 p-4 rounded shadow-md">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-gray-400">{car.description}</p>
          </div>
        ))}
      </div>

      <Link
        to="/dashboardPage"
        className="mt-6 inline-block bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default TotalCarsPage;
