import { motion } from "framer-motion";
import React, { useState } from "react";
import vehiclesData from "/src/components/vehicleData.js";

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState(() => {
    // Fetch from localStorage or fallback to default
    const storedVehicles = localStorage.getItem("vehicles");
    return storedVehicles ? JSON.parse(storedVehicles) : vehiclesData;
  });

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "",
    price: "",
    features: "",
    imageUrl: "",
    status: "Available",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      !newVehicle.name ||
      !newVehicle.price ||
      !newVehicle.type ||
      !newVehicle.imageUrl
    ) {
      alert("Please fill in all required fields, including the image URL.");
      return;
    }

    // Ensure price is stored as a number
    const updatedVehicles = [
      ...vehicles,
      {
        ...newVehicle,
        id: Date.now(),
        price: parseFloat(newVehicle.price),
        image: newVehicle.imageUrl,
      },
    ];

    setVehicles(updatedVehicles);

    // Save to localStorage
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));

    // Reset form
    setNewVehicle({
      name: "",
      type: "",
      price: "",
      features: "",
      imageUrl: "",
      status: "Available",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex flex-col"
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Vehicles</h1>

        {/* Add Vehicle Form */}
        <form
          onSubmit={handleAddVehicle}
          className="mb-6 bg-white p-4 shadow rounded"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Vehicle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newVehicle.name}
              onChange={handleInputChange}
              placeholder="Vehicle Name"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="type"
              value={newVehicle.type}
              onChange={handleInputChange}
              placeholder="Vehicle Type"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={newVehicle.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="features"
              value={newVehicle.features}
              onChange={handleInputChange}
              placeholder="Features (comma-separated)"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="imageUrl"
              value={newVehicle.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Add Vehicle
          </button>
        </form>

        {/* Vehicle Inventory */}
        <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="p-4 bg-white shadow rounded">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-lg font-bold">{vehicle.name}</h3>
              <p>Type: {vehicle.type}</p>
              <p>Price: €{vehicle.price.toFixed(2)}</p>
              <p>Features: {vehicle.features}</p>
              <p>Status: {vehicle.status}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ManageVehicles;
