import React, { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const [bookingHistory, setBookingHistory] = useState(() => {
    const savedHistory = localStorage.getItem("bookingHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    const updatedHistory = [...bookingHistory, newBooking]; // Add to history as well
    setBookings(updatedBookings);
    setBookingHistory(updatedHistory);

    saveToLocalStorage("bookings", updatedBookings);
    saveToLocalStorage("bookingHistory", updatedHistory); // Save to localStorage
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

  const completeBooking = (id) => {
    deleteBooking(id, "Completed");
  };

  // Clear entire booking history
  const clearBookingHistory = () => {
    localStorage.removeItem("bookingHistory"); // Remove from localStorage
  };

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
