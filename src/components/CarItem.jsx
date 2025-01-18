import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src={car.image || "/assets/images/car-placeholder.jpg"}
        alt={car.model}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {car.make} {car.model}
        </h3>
        <p className="text-gray-600">
          {car.year} | {car.mileage} miles
        </p>
        <p className="text-lg font-bold text-gray-900">{car.price}</p>
        <Link
          to={`/car/${car.id}`}
          className="mt-2 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarItem;
