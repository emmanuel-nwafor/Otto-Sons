import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context for Booking Data
const BookingContext = createContext();

// Custom hook to access BookingContext
export const useBooking = () => useContext(BookingContext);

// BookingProvider to wrap around the app and provide data globally
export const BookingProvider = ({ children }) => {
  // Initialize state with bookings from localStorage if available
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // Function to save bookings to localStorage whenever it changes
  const saveBookingsToLocalStorage = (updatedBookings) => {
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  // Add a new booking
  const addBooking = (newBooking) => {
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    saveBookingsToLocalStorage(updatedBookings); // Persist updated bookings
  };

  // Delete a booking
  const deleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    saveBookingsToLocalStorage(updatedBookings); // Persist updated bookings
  };

  // Edit an existing booking
  const editBooking = (updatedBooking) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === updatedBooking.id ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    saveBookingsToLocalStorage(updatedBookings); // Persist updated bookings
  };

  // Use effect to update localStorage whenever bookings state changes
  useEffect(() => {
    saveBookingsToLocalStorage(bookings);
  }, [bookings]);

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, deleteBooking, editBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};
