import React from "react";
// import Logo1 from "/src/assets/Logo1.png";

const AdminHeader = () => {
  return (
    <>
      {" "}
      <header className="text-white bg-gray-700 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[25px] font-bold flex items-center">
            Bookings & Purchase 
            {/* <img src={Logo1} className="h-16" alt="" /> */}
          </span>
        </div>

        {/* Dropdown for options */}
        <div className="flex items-center space-x-4"></div>
      </header>
    </>
  );
};

export default AdminHeader;
