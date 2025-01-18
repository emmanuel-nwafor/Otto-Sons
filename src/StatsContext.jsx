import React, { createContext, useState, useContext, useEffect } from "react";

const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({
    totalCars: 3,
    cars: [
      {
        id: 1,
        name: "Toyota Corolla",
        image:
          "https://media.istockphoto.com/id/1006541592/photo/3d-illustration-of-generic-red-sports-coupe-car-on-white-background.jpg?s=612x612&w=0&k=20&c=bj11mhk3sCygoJOiRQhUUAlTE1__5GQDluk7O60KrMs=",
        description: "Reliable sedan for everyday use.",
      },
      {
        id: 2,
        name: "Honda Civic",
        image:
          "https://images.pexels.com/photos/22987066/pexels-photo-22987066/free-photo-of-blue-volkswagen-t-cross.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Sporty car with great fuel efficiency.",
      },
      {
        id: 3,
        name: "Ford Mustang",
        image:
          "https://images.pexels.com/photos/12170315/pexels-photo-12170315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
    }, 3600000); // Adjust the interval time (5 seconds in this case)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <StatsContext.Provider value={{ stats }}>{children}</StatsContext.Provider>
  );
};

export const useStats = () => useContext(StatsContext);
