import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    name: "BMW M440 Coupe",
    price: "159.99 €/day",
    image:
      "https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png",
    type: "Automatic",
    description: "A high-performance luxury coupe offering dynamic driving.",
  },
  {
    id: 2,
    name: "VW T-Roc",
    price: "58.40 €/day",
    image: "https://pngimg.com/uploads/bmw/bmw_PNG1702.png",
    type: "Manual",
    description: "A compact SUV with a stylish design and agile handling.",
  },
  // ... Add descriptions for other cars
];

const CarOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the vehicle with the matching ID
  const vehicle = vehicles.find((car) => car.id === parseInt(id));

  // If no vehicle is found, show an error
  if (!vehicle) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Car Not Found</h1>
        <button
          onClick={() => navigate("/vehicles")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <button
        onClick={() => navigate("/vehicles")}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Back to Vehicles
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
          <p className="text-lg mb-4">{vehicle.description}</p>
          <p className="text-lg font-semibold mb-4">Price: {vehicle.price}</p>
          <p className="text-sm mb-4">Transmission: {vehicle.type}</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
