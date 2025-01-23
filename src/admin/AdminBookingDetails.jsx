import React from "react";
import { useBooking } from "../BookingContext";
import Header from "../components/Header";
import { motion } from "framer-motion";

const AdminBookingDetails = () => {
  const { bookings } = useBooking();

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Smooth fade-in and fade-out transition
        className="min-h-screen bg- flex flex-col"
      >
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Admin: View Bookings</h1>
          {bookings.length === 0 ? (
            <div className="text-center text-white text-lg">
              No active bookings available.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-800 text-white shadow-lg"
                >
                  <h2 className="text-xl font-bold mb-2">
                    {booking.vehicleName}
                  </h2>
                  <p className="text-md">Booked by: {booking.fullName}</p>
                  <p className="text-md">Pick-up Date: {booking.pickUpDate}</p>
                  <p className="text-md">
                    Drop-off Date: {booking.dropOffDate}
                  </p>
                  <p className="text-md">
                    Total Price: €{booking.totalPrice.toFixed(2)}
                  </p>
                  <p className="text-md">Booking ID: {booking.id}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default AdminBookingDetails;
