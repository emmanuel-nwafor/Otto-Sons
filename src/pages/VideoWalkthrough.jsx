// src/components/VideoWalkthrough.js

import React from "react";
import { useParams } from "react-router-dom";
import vehicles from "/src/components/vehicleData";

const VideoWalkthrough = () => {
  const { id } = useParams(); // Get the vehicle ID from the URL
  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return <div className="text-white">Vehicle not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()} // Go back to the previous page
          className="text-blue-500 underline mb-4 block"
        >
          &larr; Back to Vehicle Overview
        </button>

        {/* Video Walkthrough */}
        <div className="rounded-lg p-3">
          <h1 className="text-3xl font-bold mb-4">
            {vehicle.name} - Video Walkthrough
          </h1>
          <video
            className="w-full h-auto"
            controls
            src={vehicle.videoWalkthrough} // Use the video URL from the vehicle data
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoWalkthrough;
