import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header className="text-white bg-gray-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-[25px] font-bold">Otto-Sons</span>
      </div>

      {/* Dropdown for options */}
      <select className="bg-gray-700 p-2 rounded">
        <option>Buy</option>
        <option>Repair</option>
      </select>

      {/* Right-side buttons */}
      <div className="flex items-center space-x-4">
        {/* Manage Bookings Button */}
        <button
          onClick={() => navigate("/manage-bookings")} // Navigate to Manage Bookings
        >
          Bookings
        </button>

        {/* Language Selector */}
        <select className="bg-gray-700 p-2 rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
