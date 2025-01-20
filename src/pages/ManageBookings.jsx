import React from "react";
import { useBooking } from "../BookingContext";

const ManageBookings = () => {
  const { bookings, deleteBooking } = useBooking();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div>
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border p-4 rounded-lg mb-4 bg-gray-100 text-black"
            >
              <img
                src={booking.vehicleImage}
                alt={booking.vehicleName}
                className="w-32 h-32 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-bold">{booking.vehicleName}</h2>
              <p>
                <strong>Booked by:</strong> {booking.fullName}
              </p>
              <p>
                <strong>Pick-up Date:</strong> {booking.pickUpDate}
              </p>
              <p>
                <strong>Drop-off Date:</strong> {booking.dropOffDate}
              </p>
              <p>
                <strong>Total Price:</strong> €{booking.totalPrice.toFixed(2)}
              </p>
              <button
                onClick={() => deleteBooking(booking.id)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBookings;
