import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import VehicleAside from "./VehicleAside";

const VehicleList = () => {
  const [selectedType, setSelectedType] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [vehicles, setVehicles] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation(); // Animation control

  useEffect(() => {
    // Fetch vehicles from localStorage or default to an empty array
    const storedVehicles = localStorage.getItem("vehicles");
    setVehicles(storedVehicles ? JSON.parse(storedVehicles) : []);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Filter vehicles based on selected type and max price
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesType = selectedType ? vehicle.type === selectedType : true;
    const matchesPrice = vehicle.price <= maxPrice;
    return matchesType && matchesPrice;
  });

  // Scroll-based animation trigger for each vehicle card
  const vehicleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
        className={`fixed top-0 left-0 bg-gray-800 text-white p-6 flex flex-col justify-start z-40 transition-transform transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } h-screen lg:h-auto lg:overflow-visible sm:overflow-auto`}
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
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>

        {/* Price Filter */}
        <div className="mb-4 mt-8">
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
            <motion.div
              key={vehicle.id}
              className="bg-gray-800 rounded-lg p-5 flex-col hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/vehicles/${vehicle.id}`)}
              variants={vehicleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full object-cover mb-4 rounded"
              />
              <div className="flex justify-between items-center">
                <div className="flex-col items-center">
                  <h3 className="font-bold text-2xl">{vehicle.name}</h3>
                  <span className="text-sm flex items-center mt-2 rounded">
                    <i class="bx bx-cog text-xl"></i>{" "}
                    <i class="bx bxs-cog text-xl translate-x-[-11px]"></i>
                    {vehicle.type}
                  </span>
                </div>
                <div className="flex-col items-center">
                  {" "}
                  <div className="flex-col">
                    <p className="text-2xl text-green-600 ">
                      {vehicle.price ? vehicle.price.toFixed(2) : "N/A"} €/day
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
            </motion.div>
          ))}
        </div>
      </main>
      <VehicleAside />
    </div>
  );
};

export default VehicleList;
