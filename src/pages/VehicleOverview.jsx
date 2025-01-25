import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import vehicles from "/src/components/vehicleData";
import SimilarVehicles from "/src/components/SimilarVehicles";
import BookingModal from "/src/components/BookingModal";

const VehicleOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isProcessing, setIsProcessing] = useState(false); // State for purchase processing feedback

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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handlePurchase = () => {
    setTimeout(() => {
      navigate(`/purchase/${vehicle.id}`);
    }, 2000);
  };

  return (
    <>
      {" "}
      <div className="min-h-screen bg-gray-900 text-white p-4">
        {" "}
        <div className="max-w-4xl mx-auto">
          {/* Vehicle Details */}
          <div className="rounded-lg p-3">
            <div className="flex flex-col md:flex-row items-center">
              {/* Vehicle Image */}
              <img
                src={vehicle.image || "/default-image.png"}
                alt={vehicle.name || "Unknown Vehicle"}
                className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
              />

              {/* Vehicle Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">
                  {vehicle.name || "Unknown Vehicle"}
                </h1>
                <p className="text-xl mb-4">
                  Price:{" "}
                  <span className="text-green-500">
                    {vehicle.price
                      ? `${vehicle.price} €/day`
                      : "Price not available"}
                  </span>
                </p>
                <div className="flex items-center mb-3">
                  {" "}
                  <p className="m- text-lg">Transmission: </p>
                  <span className="text-sm flex items-center ml-3 p-[2px] rounded-full bg-zinc-500">
                    <i class="bx bx-cog text-xl"></i>{" "}
                    <i class="bx bxs-cog text-xl translate-x-[-11px]"></i>
                    {vehicle.type}
                  </span>
                </div>
                <p className="text-lg mb-6">
                  Description: This {vehicle.name || "vehicle"} is the perfect
                  choice for your next trip, combining luxury, performance, and
                  affordability.
                </p>
                <div className="flex gap-4">
                  {/* Book Now Button */}
                  <button
                    onClick={openModal}
                    className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    role="button"
                  >
                    Book Now
                  </button>

                  {/* Purchase Vehicle Button */}
                  <button
                    onClick={handlePurchase}
                    disabled={isProcessing} // Disable button during processing
                    className={`w-full md:w-auto py-2 px-4 rounded ${
                      isProcessing
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    role="button"
                  >
                    {isProcessing ? "Processing..." : "Purchase Vehicle"}
                  </button>
                </div>

                {/* Link to Video Walkthrough */}
                {vehicle.videoWalkthrough && (
                  <div className="mt-4">
                    <Link
                      to={`/video-walkthrough/${vehicle.id}`} // Link to the Video Walkthrough page
                      className="text-blue-500 underline"
                    >
                      Watch Video Walkthrough
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Similar Vehicles Section */}
          <SimilarVehicles
            currentVehicleId={vehicle.id}
            currentVehicleType={vehicle.type}
          />
        </div>
        {/* Booking Modal */}
        {isModalOpen && (
          <BookingModal
            vehicle={vehicle}
            onClose={closeModal} // Pass the close function to the modal
          />
        )}
      </div>{" "}
    </>
  );
};

export default VehicleOverview;
