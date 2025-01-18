import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Car List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p>
                <strong>Model:</strong> {car.model}
              </p>
              <p>
                <strong>Year:</strong> {car.year}
              </p>
              <p>
                <strong>Price:</strong> {car.price}
              </p>
              <p>
                <strong>Description:</strong> {car.description}
              </p>
              <p
                className={`font-bold ${
                  car.status === "Available" ? "text-green-600" : "text-red-600"
                }`}
              >
                Status: {car.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
