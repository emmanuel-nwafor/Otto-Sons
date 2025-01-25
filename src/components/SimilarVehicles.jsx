import React from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "/src/components/vehicleData";

const SimilarVehicles = ({ currentVehicleId, currentVehicleType }) => {
  const navigate = useNavigate();

  // Filter vehicles by type but exclude the current vehicle
  const similarVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.type === currentVehicleType && vehicle.id !== currentVehicleId
  );

  return (
    <>
      {" "}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Similar Vehicles</h2>
        {similarVehicles.length === 0 ? (
          <p>No similar vehicles found.</p>
        ) : (
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <div className="flex gap-6">
              {similarVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-gray-800 rounded-lg p-5 flex-shrink-0 w-80 cusor-pointer hover:shadow-lg"
                  onClick={() => navigate(`/vehicles/${vehicle.id}`)} // Navigate to selected vehicle
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full object-cover mb-4 rounded"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex-col items-center">
                      <h3 className="font-bold text-md">{vehicle.name}</h3>
                      <span className="text-sm flex items-center mt-2 rounded">
                        <i class="bx bx-cog text-xl"></i>{" "}
                        <i class="bx bxs-cog text-xl translate-x-[-11px]"></i>
                        {vehicle.type}
                      </span>
                    </div>
                    <div className="flex-col items-center">
                      {" "}
                      <div className="flex-col">
                        <p className="text-xl ">
                          {vehicle.price ? vehicle.price.toFixed(2) : "N/A"}{" "}
                          €/day
                        </p>
                        <div className="flex items-center">
                          <div>
                            <i class="bx bxs-user text-xl"></i>{" "}
                            <i class="bx bx-user text-xl translate-x-[-11px]"></i>
                          </div>
                          <p>{vehicle.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default SimilarVehicles;
