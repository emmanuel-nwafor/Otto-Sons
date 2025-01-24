import React, { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);

  // Save data to localStorage
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Add a new booking
  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    const updatedHistory = [...bookingHistory, newBooking]; // Add to history as well

    setBookings(updatedBookings);
    setBookingHistory(updatedHistory);

    saveToLocalStorage("bookings", updatedBookings);
    saveToLocalStorage("bookingHistory", updatedHistory);
  };

  // Delete a booking (move to history)
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

  // Clear all booking history
  const clearBookingHistory = () => {
    setBookingHistory([]); // Clear state
    localStorage.removeItem("bookingHistory"); // Clear localStorage
  };

  // Load bookings and history from localStorage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    const savedHistory = localStorage.getItem("bookingHistory");

    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    if (savedHistory) {
      setBookingHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <BookingContext.Provider
      value={{
        bookings,
        bookingHistory,
        addBooking,
        deleteBooking,
        completeBooking,
        clearBookingHistory, // Provide clearBookingHistory to components
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
