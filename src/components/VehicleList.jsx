import React from "react";

const vehicles = [
  {
    id: 1,
    name: "BMW M440 Coupe",
    price: "159.99 €/day",
    image:
      "https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png",
    type: "Automatic",
  },
  {
    id: 2,
    name: "VW T-Roc",
    price: "58.40 €/day",
    image: "https://pngimg.com/uploads/bmw/bmw_PNG1702.png",
    type: "Manual",
  },
  {
    id: 3,
    name: "BMW X3 30",
    price: "70.80 €/day",
    image:
      "https://www.freepnglogos.com/uploads/bmw-png/white-bmw-car-png-image-pngpix-26.png",
    type: "Automatic",
  },
  {
    id: 4,
    name: "BMW 520",
    price: "90.00 €/day",
    image:
      "https://www.freepnglogos.com/uploads/mercedes-png/mercedes-benz-class-price-features-mercedes-benz-7.png",
    type: "Automatic",
  },
  {
    id: 5,
    name: "Honda Civic GT",
    price: "200.00 €/day",
    image:
      "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-civic-specs-price-mpg-reviews-carsm-35.png",
    type: "Automatic",
  },
  {
    id: 6,
    name: "Toyota Fortuner GLX",
    price: "200.00 €/day",
    image:
      "https://www.freepnglogos.com/uploads/fortuner-png/toyota-fortuner-malaysia-reviews-specs-prices-6.png",
    type: "Automatic",
  },
  {
    id: 7,
    name: "Blue Jaguar Pace Slide",
    price: "200.00 €/day",
    image:
      "https://www.freepnglogos.com/uploads/car-png/blue-jaguar-pace-side-view-car-png-image-pngpix-37.png",
    type: "Automatic",
  },
  {
    id: 8,
    name: "Ferrari GT6",
    price: "200.00 €/day",
    image:
      "https://www.freepnglogos.com/uploads/ferrari-png/ferrari-california-reviews-and-rating-motor-trend-23.png",
    type: "Automatic",
  },
];

const VehicleList = () => {
  return (
    <main className="flex-grow p-4 bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            id={`vehicle-${vehicle.id}`}
            className="bg-gray-800 rounded-lg p-5 flex-col"
          >
            <div className="flex-col">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full object-cover mb-4"
              />
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">{vehicle.name}</h3>
                <p className="text-sm mb-2">{vehicle.price}</p>
              </div>
              <br />
              <span className="text-xs bg-gray-700 px-3 py-3 rounded">
                {vehicle.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default VehicleList;
