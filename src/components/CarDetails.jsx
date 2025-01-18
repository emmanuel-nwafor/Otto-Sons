import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <p className="text-red-500">Car not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
          src={car.image || "/assets/images/car-placeholder.jpg"}
          alt={car.model}
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">
            {car.make} {car.model}
          </h2>
          <p className="text-lg text-gray-600">
            {car.year} | {car.mileage} miles
          </p>
          <p className="text-xl font-bold text-gray-900 mt-2">{car.price}</p>
          <p className="mt-4 text-gray-700">
            Description: This is a detailed description of the car. Here, we can
            include more information about the car’s features, condition, and
            history.
          </p>
          <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Rent This Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
