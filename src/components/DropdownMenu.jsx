import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Track the selected option
  const navigate = useNavigate(); // For navigation between pages

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Navigate to the selected page if it's a valid option
    if (value === "buy") navigate("/buy");
    if (value === "repair") navigate("/repair");
    if (value === "booking") navigate("/manage-bookings");
    if (value === "history") navigate("/booking-history");
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        value={selectedOption}
        onChange={handleSelect}
        className="block w- px-4 py-3  rounded-lg bg-gray-600 outline-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Select an Option
        </option>
        <option value="buy">Buy</option>
        <option value="repair">Repair</option>
        <option value="booking">Booking</option>
        <option value="history">Booking History</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
