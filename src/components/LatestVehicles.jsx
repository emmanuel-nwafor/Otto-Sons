import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestVehicles = async () => {
      try {
        setLoading(true);
        setError(null);

        // Example API call
        const response = await axios.get(
          "https://api.example.com/vehicles/latest"
        );
        setVehicles(response.data);
      } catch (err) {
        setError(
          "Failed to fetch the latest vehicles. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVehicles();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600">Loading latest vehicles...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Latest Vehicles
      </h2>
      {vehicles.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">
          No new vehicles available.
        </p>
      ) : (
        <ul className="space-y-4">
          {vehicles.map((vehicle) => (
            <li
              key={vehicle.id}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {vehicle.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {vehicle.type} • {vehicle.price} €/day
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Added on: {new Date(vehicle.dateAdded).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LatestVehicles;
