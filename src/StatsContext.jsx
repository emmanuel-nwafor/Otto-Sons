import React, { createContext, useState, useContext, useEffect } from "react";

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({
    totalCars: 0,
    carsRented: 0,
    pendingRepairs: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      const data = {
        totalCars: Math.floor(Math.random() * 230),
        carsRented: Math.floor(Math.random() * 100),
        pendingRepairs: Math.floor(Math.random() * 150),
        activeUsers: Math.floor(Math.random() * 200),
      };
      setStats(data);
    };

    fetchData();
  }, []); // Fetch data on component mount

  return (
    <StatsContext.Provider value={stats}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  return useContext(StatsContext);
};
