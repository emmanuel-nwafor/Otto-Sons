import React, { useState } from "react";
import logo from "/src/assets/logo1.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-transparent backdrop-blur-md max-md:p-0 p-4 m-5 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="  container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className=" flex items-center ">
          <img src={logo} className=" h-20 " alt="" />
          <h1 className="text-white font-extrabold text-xl">Otto</h1>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <i
              className={`bx ${
                isMobileMenuOpen ? "bx-x" : "bx-menu"
              } text-3xl transition-all duration-300`}
            ></i>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 text-white">
          <a href="#home" className="hover:text-zinc-200 hover:underline">
            Home
          </a>
          <a href="#services" className="hover:text-zinc-200 hover:underline">
            Services
          </a>
          <a href="#about" className="hover:text-zinc-200 hover:underline">
            About
          </a>
          <a href="#contact" className="hover:text-zinc-200 hover:underline">
            Contact
          </a>
          <a href="#contact" className="hover:text-zinc-200 hover:underline">
            Dashboard
          </a>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 text-white py-4">
          <a href="#home" className="hover:text-zinc-200 hover:underline">
            Home
          </a>
          <a href="#services" className="hover:text-zinc-200 hover:underline">
            Services
          </a>
          <a href="#about" className="hover:text-zinc-200 hover:underline">
            About
          </a>
          <a href="#contact" className="hover:text-zinc-200 hover:underline">
            Contact
          </a>
          <a href="#contact" className="hover:text-zinc-200 hover:underline">
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
