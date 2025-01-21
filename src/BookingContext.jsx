import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  // State for current bookings and booking history
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const [bookingHistory, setBookingHistory] = useState(() => {
    const savedHistory = localStorage.getItem("bookingHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save to localStorage
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Add a new booking
  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    saveToLocalStorage("bookings", updatedBookings);
  };

  // Delete (move to history) a booking
  const deleteBooking = (id, status = "Canceled") => {
    const bookingToCancel = bookings.find((booking) => booking.id === id);
    if (!bookingToCancel) return;

    const updatedBookings = bookings.filter((booking) => booking.id !== id);

    const updatedHistory = [
      ...bookingHistory,
      { ...bookingToCancel, status, actionDate: new Date().toISOString() },
    ];

    setBookings(updatedBookings);
    setBookingHistory(updatedHistory);

    saveToLocalStorage("bookings", updatedBookings);
    saveToLocalStorage("bookingHistory", updatedHistory);
  };

  // Mark a booking as completed
  const completeBooking = (id) => {
    deleteBooking(id, "Completed");
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        bookingHistory,
        addBooking,
        deleteBooking,
        completeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
