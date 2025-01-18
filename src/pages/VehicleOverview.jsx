import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import vehicles from "/src/components/vehicleData";
import SimilarVehicles from "/src/components/SimilarVehicles";

const VehicleOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
        <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
        <button
          onClick={() => navigate("/vehicles")}
          className="text-blue-500 underline"
        >
          Go Back to Vehicle List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/vehicles")} // Navigate back to vehicle list
          className="text-blue-500 underline mb-4 block"
        >
          &larr; Back to Vehicles
        </button>

        {/* Vehicle Details */}
        <div className=" rounded-lg p-3 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Vehicle Image */}
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
            />

            {/* Vehicle Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
              <p className="text-xl mb-4">
                Price:{" "}
                <span className="text-green-500">{vehicle.price} €/day</span>
              </p>
              <p className="text-lg mb-4">
                Transmission:{" "}
                <span className="bg-gray-700 px-3 py-1 rounded">
                  {vehicle.type}
                </span>
              </p>
              <p className="text-lg">
                Description: This {vehicle.name} is the perfect choice for your
                next trip, combining luxury, performance, and affordability.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Vehicles Section */}
        <SimilarVehicles
          currentVehicleId={vehicle.id}
          currentVehicleType={vehicle.type}
        />
      </div>
    </div>
  );
};

export default VehicleOverview;
