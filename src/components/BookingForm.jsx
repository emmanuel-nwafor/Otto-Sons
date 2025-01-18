import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Firebase config

function BookingForm() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [userId, setUserId] = useState("");
  const [bookedDate, setBookedDate] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch car data by ID
  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch("/cars.json");
      const data = await response.json();
      const selectedCar = data.find((car) => car.id === carId);
      setCar(selectedCar);
    };

    fetchCar();
  }, [carId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const bookingRef = collection(db, "bookings");
      await addDoc(bookingRef, {
        carId,
        userId,
        bookedDate,
        duration,
        status,
        createdAt: new Date(),
      });
      alert("Booking successful!");
      navigate("/bookings"); // Redirect after successful booking
    } catch (error) {
      alert("Error booking the car.");
    } finally {
      setLoading(false);
    }
  };

  if (!car) {
    return <div>Loading car details...</div>;
  }

  return (
    <div>
      <h2>Book {car.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label>Booked Date:</label>
          <input
            type="date"
            value={bookedDate}
            onChange={(e) => setBookedDate(e.target.value)}
          />
        </div>
        <div>
          <label>Duration (Days):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
