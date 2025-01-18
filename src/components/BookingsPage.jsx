import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/bookings.json"); // Or your backend endpoint
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id}>
            <p>Car: {booking.carId}</p>
            <p>Booked Date: {booking.bookedDate}</p>
            <p>Duration: {booking.duration} days</p>
            <p>Status: {booking.status}</p>
          </div>
        ))
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BookingsPage;
