import React, { useState, useEffect } from "react";
import { useBooking } from "../BookingContext";

const BookingModal = ({ vehicle, onClose }) => {
  const { addBooking } = useBooking();
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (pickUpDate && dropOffDate) {
      const pickUp = new Date(pickUpDate);
      const dropOff = new Date(dropOffDate);

      if (pickUp > dropOff) {
        setError("Drop-off date cannot be before pick-up date.");
        setTotalPrice(0);
      } else {
        const days = (dropOff - pickUp) / (1000 * 60 * 60 * 24);
        const price = days * vehicle.price;
        setTotalPrice(price);
        setError("");
      }
    }
  }, [pickUpDate, dropOffDate, vehicle.price]);

  const handleBooking = () => {
    if (!pickUpDate || !dropOffDate || !fullName || !email) {
      alert("Please fill in all fields!");
      return;
    }

    const bookingId = Date.now();

    const newBooking = {
      id: bookingId,
      vehicleName: vehicle.name,
      vehicleImage: vehicle.image,
      pickUpDate,
      dropOffDate,
      totalPrice,
      fullName,
      email,
    };

    addBooking(newBooking);
    alert("Booking confirmed successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black p-6 m-4 rounded-lg w-full max-w-lg">
        <div className="flex items-center">
          <h2 className="text-xl font-bold mb-4"> {vehicle.name}</h2>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-44 object-cover rounded mb-4"
          />
        </div>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <h3 className="font-bold">Total Price:</h3>
          <p className="text-green-500 text-lg">{totalPrice.toFixed(2)} €</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleBooking}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Confirm Booking
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded ml-4 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
