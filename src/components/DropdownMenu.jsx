import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // if (value === "buy") navigate("/buy");
    // if (value === "repair") navigate("/repair");
    if (value === "booking") navigate("/manage-bookings");
    if (value === "history") navigate("/booking-history");
    if (value === "purchase-history") navigate("/purchase-history");
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        value={selectedOption}
        onChange={handleSelect}
        className="block w-full px-4 py-3 rounded-lg bg-gray-600 outline-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Select an Option
        </option>
        {/* <option value="buy">Buy</option>
        <option value="repair">Repair</option> */}
        <option value="booking">Manage Bookings</option>
        <option value="history">Booking History</option>
        <option value="purchase-history">Purchase History</option>{" "}
      </select>
    </div>
  );
};

export default DropdownMenu;
