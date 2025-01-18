import React from "react";
import { useParams } from "react-router-dom";

function BookingPage() {
  const { id } = useParams(); // Get car ID from URL
  const [car, setCar] = React.useState(null);

  React.useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch("/cars.json");
        const data = await response.json();
        const selectedCar = data.find((car) => car.id === id);
        setCar(selectedCar); // Set selected car details
      } catch (error) {
        console.error("Error fetching car data: ", error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Book {car.name}</h2>
      <p>{car.description}</p>
      {/* You can add the booking form here */}
    </div>
  );
}

export default BookingPage;
