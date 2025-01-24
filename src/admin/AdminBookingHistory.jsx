import React, { useState } from "react";
import { useBooking } from "../BookingContext"; // Importing the hook to access context

const AdminBookingHistory = () => {
  const { bookingHistory, clearBookingHistory } = useBooking(); // Accessing context values
  const [showModal, setShowModal] = useState(false);

  const handleDeleteHistory = () => {
    clearBookingHistory();
    setShowModal(false);
  };

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Booking History</h1>
          {bookingHistory.length > 0 && (
            <button
              onClick={() => setShowModal(true)} // Open the modal
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete History
            </button>
          )}
        </div>

        {bookingHistory.length === 0 ? (
          <div className="max-md:flex-col flex items-center justify-center">
            <p className="text-black text-[180px]">No</p>
            <p className="text-black">
              Booking <br className="max-md:hidden" /> history available
            </p>
          </div>
        ) : (
          <div>
            {bookingHistory.map((history, index) => (
              <div
                key={index}
                className="p-4 rounded-lg mb-4 bg-[#dfdfdf] text-black"
              >
                <h2 className="text-3xl font-bold">{history.vehicleName}</h2>
                <p className="text-[18px]">Booked by: {history.fullName}</p>
                <p className="text-[18px]">
                  Pick-up Date: {history.pickUpDate}
                </p>
                <p className="text-[18px]">
                  Drop-off Date: {history.dropOffDate}
                </p>
                <p className="text-[18px]">
                  Total Price: €{history.totalPrice.toFixed(2)}
                </p>
                <p className="text-[18px]">Status: {history.status}</p>
                <p className="text-[18px]">
                  Action Date: {new Date(history.actionDate).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Modal for confirming deletion */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
              <p className="mb-6">
                Are you sure you want to delete the entire booking history? This
                action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)} // Close the modal
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteHistory} // Confirm deletion
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminBookingHistory;
