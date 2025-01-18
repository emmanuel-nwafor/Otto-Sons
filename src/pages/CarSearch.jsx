import React from "react";

function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Keyword"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        />
        <select className="w-full mb-4 p-2 rounded bg-gray-700 text-white">
          <option>Make</option>
          <option>BMW</option>
          <option>Audi</option>
        </select>
        <select className="w-full mb-4 p-2 rounded bg-gray-700 text-white">
          <option>Model</option>
        </select>
        <div className="mb-4">
          <label className="block mb-2">Year</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="From"
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Till"
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mileage</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="From"
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Till"
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
        <select className="w-full mb-4 p-2 rounded bg-gray-700 text-white">
          <option>Body Style</option>
        </select>
        <button className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700">
          Apply
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-2/4 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">24 Vehicles Found</h1>
          <div className="flex gap-2">
            <span className="bg-blue-600 px-3 py-1 rounded-full">BMW</span>
            <span className="bg-blue-600 px-3 py-1 rounded-full">
              Convertible
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded">
            <img
              src="/images/car1.jpg"
              alt="Car 1"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">BMW 4 Series</h3>
            <p>Year: 2019</p>
            <p>Body Style: Convertible</p>
            <p>Fuel Type: Gasoline</p>
            <p>Price: $51,000</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <img
              src="/images/car2.jpg"
              alt="Car 2"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">BMW M8</h3>
            <p>Year: 2020</p>
            <p>Body Style: Convertible</p>
            <p>Fuel Type: Gasoline</p>
            <p>Price: $224,000</p>
          </div>
        </div>
      </div>

      {/* User Stats Section */}
      <div className="w-full lg:w-1/4 bg-gray-800 p-6">
        <header className="flex items-center gap-4 mb-6">
          <img
            src="/images/user-profile.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full"
          />
          <h3 className="text-xl font-bold">Edit Profile</h3>
        </header>
        <ul className="mb-6">
          <li className="mb-4">
            <div className="text-4xl font-bold">89</div>
            <div className="text-sm text-gray-400">Successful Shopping</div>
          </li>
          <li className="mb-4">
            <div className="text-4xl font-bold">346</div>
            <div className="text-sm text-gray-400">Number of Auctions</div>
          </li>
          <li className="mb-4">
            <div className="text-4xl font-bold">34</div>
            <div className="text-sm text-gray-400">Successful Sales</div>
          </li>
          <li className="mb-4">
            <div className="text-4xl font-bold">67</div>
            <div className="text-sm text-gray-400">Achievements</div>
          </li>
        </ul>
        <ul className="text-sm">
          <li className="mb-2">Expert Advice</li>
          <li className="mb-2">Car Service</li>
          <li>Help Center</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;
