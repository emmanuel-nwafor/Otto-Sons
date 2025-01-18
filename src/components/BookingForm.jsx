import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore instance
import { useHistory } from "react-router-dom";

function BookingForm({ car }) {
  const [userId, setUserId] = useState(""); // User ID (this could come from a login system)
  const [bookedDate, setBookedDate] = useState(""); // Booked Date
  const [duration, setDuration] = useState(""); // Booking duration in days
  const [status, setStatus] = useState("Pending"); // Booking status
  const [loading, setLoading] = useState(false); // Loading state

  const history = useHistory(); // For navigation after booking

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const bookingRef = collection(db, "bookings"); // Reference to Firestore bookings collection
      await addDoc(bookingRef, {
        carId: car.id, // ID of the booked car
        userId: userId, // User's ID
        bookedDate: bookedDate, // Date of the booking
        duration: duration, // Booking duration
        status: status, // Booking status (e.g., Pending, Confirmed)
        createdAt: new Date(), // Timestamp when the booking is created
      });
      alert("Booking Successful!");
      history.push("/bookings"); // Redirect to bookings page after success
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("Error booking the car. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Book {car.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-semibold">
            User ID:
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="bookedDate" className="block text-sm font-semibold">
            Booked Date:
          </label>
          <input
            type="date"
            id="bookedDate"
            value={bookedDate}
            onChange={(e) => setBookedDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-semibold">
            Duration (in days):
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
