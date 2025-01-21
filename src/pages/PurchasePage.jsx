// Import necessary libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PurchasePage = ({ vehicle }) => {
  const navigate = useNavigate();

  // State to handle user details for purchase
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a purchase request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Purchase successful!");
      navigate("/thank-you"); // Redirect to a thank-you page
    }, 2000);
  };

  return (
    <div className="purchase-page bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Purchase {vehicle.name}</h1>

        <div className="vehicle-info mb-6 p-4 bg-gray-800 rounded-lg">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">{vehicle.name}</h2>
          <p className="text-lg">Price: {vehicle.price.toFixed(2)} €</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="purchase-form bg-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Your Details</h2>

          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Purchase"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;
