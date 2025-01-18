import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TotalCarsPage() {
  const [cars, setCars] = useState([]); // State to store cars
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/cars.json");
        if (!response.ok) {
          throw new Error("Failed to fetch car data.");
        }
        const data = await response.json();
        setCars(data); // Set cars data from the JSON file
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500">{error}</p>
        <Link
          to="/dashboardPage"
          className="mt-4 inline-block bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Total Cars</h1>
      <p className="text-lg mb-6">
        Number of Cars in the Inventory: {cars.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-gray-800 p-4 rounded shadow-md">
            {car.image && (
              <img
                src={`/images/${car.image}`} // Reference local images in public/images
                alt={car.name || "Car image"}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-gray-400">{car.description}</p>

            {/* Book Now button that redirects to the booking page with car details */}
            <Link
              to={`/book/${car.id}`} // Ensure this matches your booking route
              className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/dashboardpage"
        className="mt-6 inline-block bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default TotalCarsPage;
