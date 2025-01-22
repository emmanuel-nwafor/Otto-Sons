import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import Logo1 from "/src/assets/Logo1.png";

const Header = () => {
  return (
    <>
      {" "}
      <header className="text-white bg-gray-800 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[25px] font-bold flex items-center">
            Otto-Sons <img src={Logo1} className="h-16" alt="" />
          </span>
        </div>

        {/* Dropdown for options */}
        <div className="flex items-center space-x-4">
          <DropdownMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
