import React from "react";
import { useBooking } from "../BookingContext";

const BookingHistory = () => {
  const { bookingHistory } = useBooking();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Booking History</h1>
      {bookingHistory.length === 0 ? (
        <p>No booking history available.</p>
      ) : (
        <div>
          {bookingHistory.map((history, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg mb-4 bg-slate-950 text-white"
            >
              <h2 className="text-3xl font-bold">{history.vehicleName}</h2>
              <p className=" text-[20px] ">Booked by: {history.fullName}</p>
              <p className=" text-[20px] ">
                Pick-up Date: {history.pickUpDate}
              </p>
              <p className=" text-[20px] ">
                Drop-off Date: {history.dropOffDate}
              </p>
              <p className=" text-[20px] ">
                Total Price: €{history.totalPrice.toFixed(2)}
              </p>
              <p className=" text-[20px] ">Status: {history.status}</p>
              <p className=" text-[20px] ">
                Action Date:
                {new Date(history.actionDate).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
