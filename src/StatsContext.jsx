import React, { createContext, useState, useContext, useEffect } from "react";

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({
    totalCars: 3,
    cars: [
      {
        id: 1,
        name: "Toyota Corolla",
        image: "/images/toyota-corolla.jpg",
        description: "Reliable sedan for everyday use.",
      },
      {
        id: 2,
        name: "Honda Civic",
        image: "/images/honda-civic.jpg",
        description: "Sporty car with great fuel efficiency.",
      },
      {
        id: 3,
        name: "Ford Mustang",
        image: "/images/ford-mustang.jpg",
        description: "Powerful and stylish muscle car.",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const isAdding = Math.random() > 0.5; // Randomly decide to add or remove a car
        let updatedCars = [...prevStats.cars];

        if (isAdding) {
          const newCar = {
            id: prevStats.cars.length + 1,
            name: `New Car ${prevStats.cars.length + 1}`,
            image: "/images/new-car.jpg",
            description: "This is a dynamically added car.",
          };
          updatedCars.push(newCar);
        } else if (updatedCars.length > 1) {
          updatedCars.pop(); // Remove the last car if we are reducing
        }

        return {
          ...prevStats,
          totalCars: updatedCars.length,
          cars: updatedCars,
        };
      });
    }, 5000); // Adjust the interval time (5 seconds in this case)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <StatsContext.Provider value={{ stats }}>{children}</StatsContext.Provider>
  );
};

export const useStats = () => useContext(StatsContext);
