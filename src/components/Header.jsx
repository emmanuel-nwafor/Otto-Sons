import React from "react";

const Header = () => {
  return (
    <header className="text-white bg-gray-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        {/* <button className="text-white mr-4">&#9776;</button> */}

        <span className="text-[25px] font-bold">Otto-Sons</span>
      </div>
      <div className="flex items-center space-x-4">
        <button>Manage bookings</button>
        <select className="bg-gray-700 p-2 rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>
        <button>Log out</button>
      </div>
    </header>
  );
};

export default Header;
