// src/pages/AvailableCarsPage.js

import React from "react";
import { Link } from "react-router-dom";

const AvailableCarsPage = ({ cars }) => {
  // Filter cars by their status
  const carsForRent = cars.filter((car) => car.status === "rent");
  const carsForPurchase = cars.filter((car) => car.status === "purchase");
  const carsForRepair = cars.filter((car) => car.status === "repair");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Available Cars</h1>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Cars for Rent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsForRent.map((car) => (
            <div key={car.id} className="border rounded-lg p-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-700">Price: ${car.price}</p>
              <Link
                to={`/book/${car.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Rent this car
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cars for Purchase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsForPurchase.map((car) => (
            <div key={car.id} className="border rounded-lg p-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-700">Price: ${car.price}</p>
              <Link
                to={`/book/${car.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Purchase this car
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cars for Repair</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsForRepair.map((car) => (
            <div key={car.id} className="border rounded-lg p-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-700">Repair Cost: ${car.repairCost}</p>
              <p className="text-gray-700">Status: In Repair</p>
              <Link
                to={`/book/${car.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Request Repair
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCarsPage;
