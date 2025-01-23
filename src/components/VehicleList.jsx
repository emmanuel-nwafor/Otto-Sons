import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "/src/components/vehicleData";

const VehicleList = () => {
  const [selectedType, setSelectedType] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/login"); // Redirect to the login page
  };

  // Filter vehicles based on selected type and max price
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesType = selectedType ? vehicle.type === selectedType : true;
    const matchesPrice = vehicle.price <= maxPrice;

    return matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden bg-gray-800 text-white p-2 m-4 rounded"
      >
        {isSidebarOpen ? "Close Filters" : "Open Filters"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-gray-800 text-white p-6 flex-col items-center justify-center z-40 transition-transform transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Transmission Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Transmission</h3>
          <select
            className="w-full bg-gray-700 p-2 rounded"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:bg-red-600 transition-all text-white py-2 px-20 lg:px-1 rounded"
        >
          Log out
        </button>
        <br />
        <br />

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Max Price (€/day)</h3>
          <input
            type="range"
            min="50"
            max="200"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />
          <p className="text-sm mt-2">Up to: {maxPrice} €/day</p>
        </div>
      </aside>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-grow p-4 bg-gray-900 text-white">
        <h2 className="text-xl font-bold mb-4">Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-gray-800 rounded-lg p-5 flex-col hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/vehicles/${vehicle.id}`)}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full object-cover mb-4 rounded"
              />
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">{vehicle.name}</h3>
                <p className="text-sm mb-2">{vehicle.price.toFixed(2)} €/day</p>
              </div>
              <span className="text-xs bg-gray-700 px-3 py-1 rounded">
                {vehicle.type}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VehicleList;
