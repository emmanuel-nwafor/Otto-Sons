import React, { useState } from "react";
import { useBooking } from "../BookingContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ManageBookings = () => {
  const { bookings, deleteBooking, editBooking } = useBooking(); // Access the editBooking function from the context
  const [editingBookingId, setEditingBookingId] = useState(null); // Track which booking is being edited
  const [editedBooking, setEditedBooking] = useState({}); // Store the updated booking details
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Control the visibility of the confirmation modal
  const [bookingToDelete, setBookingToDelete] = useState(null); // Track which booking is being deleted
  const [showCalendar, setShowCalendar] = useState(false); // Toggle between list and calendar views

  const startEditing = (booking) => {
    setEditingBookingId(booking.id); // Set the editing state
    setEditedBooking({ ...booking }); // Populate the edited booking with the current booking details
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBooking((prev) => ({ ...prev, [name]: value })); // Update the booking details on input change
  };

  const saveChanges = () => {
    editBooking(editedBooking); // Save the updated booking
    setEditingBookingId(null); // Exit editing mode
  };

  const cancelEditing = () => {
    setEditingBookingId(null); // Exit editing mode without saving changes
  };

  const openConfirmModal = (id) => {
    setBookingToDelete(id); // Set the booking to delete
    setShowConfirmModal(true); // Open the confirmation modal
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false); // Close the modal without deleting
    setBookingToDelete(null); // Clear the booking to delete
  };

  const confirmDelete = () => {
    deleteBooking(bookingToDelete); // Delete the selected booking
    setShowConfirmModal(false); // Close the modal
    setBookingToDelete(null); // Clear the booking to delete
  };

  // Prepare events for the calendar
  const events = bookings.map((booking) => ({
    id: booking.id,
    title: `${booking.vehicleName} - ${booking.fullName}`,
    start: new Date(booking.pickUpDate),
    end: new Date(booking.dropOffDate),
  }));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Bookings</h1>
        <button
          onClick={() => setShowCalendar((prev) => !prev)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {showCalendar ? "View List" : "View Calendar"}
        </button>
      </div>

      {showCalendar ? (
        // Calendar View
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectEvent={(event) => {
              // Optional: Handle event click
              const booking = bookings.find((b) => b.id === event.id);
              startEditing(booking);
            }}
          />
        </div>
      ) : (
        // List View
        <div>
          {bookings.length === 0 ? (
            <p>No bookings available.</p>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-lg mb-4 text-white max-md:flex-col"
              >
                {editingBookingId === booking.id ? (
                  // Editing Mode
                  <div>
                    <h2 className="text-lg font-bold mb-2">Edit Booking</h2>
                    <label className="block mb-2">
                      Full Name:
                      <input
                        type="text"
                        name="fullName"
                        value={editedBooking.fullName}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Pick-Up Date:
                      <input
                        type="date"
                        name="pickUpDate"
                        value={editedBooking.pickUpDate}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Drop-Off Date:
                      <input
                        type="date"
                        name="dropOffDate"
                        value={editedBooking.dropOffDate}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Total Price:
                      <input
                        type="number"
                        name="totalPrice"
                        value={editedBooking.totalPrice}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <button
                      onClick={saveChanges}
                      className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  // View Mode
                  <div className="flex items-center justify-evenly max-md:flex-col">
                    <img
                      src={booking.vehicleImage}
                      alt={booking.vehicleName}
                      className="w-40 h-40 object-cover rounded mb-4"
                    />
                    <div className="">
                      <h2 className="text-lg font-bold">
                        {booking.vehicleName}
                      </h2>
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
                        <strong>Total Price:</strong> €
                        {booking.totalPrice.toFixed(2)}
                      </p>
                      <button
                        onClick={() => openConfirmModal(booking.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded mt-4 mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => startEditing(booking)}
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                      >
                        Edit Booking
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this booking?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              >
                Yes, Delete
              </button>
              <button
                onClick={closeConfirmModal}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBookings;
