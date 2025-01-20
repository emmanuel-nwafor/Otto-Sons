import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user"); // Adjust this if you're storing a different key for the user
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <header className="text-white bg-gray-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-[25px] font-bold">Otto-Sons</span>
      </div>

      {/* Dropdown for options */}
      <select className="bg-gray-700 p-2 rounded">
        <option>Book</option>
        <option>Buy</option>
        <option>Repair</option>
      </select>

      {/* Right-side buttons */}
      <div className="flex items-center space-x-4">
        {/* Manage Bookings Button */}
        <button
          onClick={() => navigate("/manage-bookings")} // Navigate to Manage Bookings
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Manage Bookings
        </button>

        {/* Language Selector */}
        <select className="bg-gray-700 p-2 rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>

        {/* Log Out Button */}
        <button
          onClick={handleLogout} // Call logout function
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
