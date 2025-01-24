import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import logo from "/src/assets/logo1.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div id="home"></div>
      <nav className="bg-transparent backdrop-blur-md max-md:p-0 p-4 m-5 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} className="h-20" alt="Logo" />
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
          <div className="hidden lg:flex space-x-4 text-white items-center">
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
            {/* Link to Signup */}
            <Link to="/signup" className="hover:text-zinc-200 hover:underline">
              Signup
            </Link>
            {/* Link to Login */}
            <Link to="/login" className="hover:text-zinc-200 hover:underline">
              <button className="p-2 pl-6 pr-6 rounded-lg bg-zinc-500 hover:bg-zinc-700 transition-all">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-transparent text-white py-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center space-y-4 rounded-lg ">
                <a href="#home" className="hover:text-zinc-200 hover:underline">
                  Home
                </a>
                <a
                  href="#services"
                  className="hover:text-zinc-200 hover:underline"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="hover:text-zinc-200 hover:underline"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="hover:text-zinc-200 hover:underline"
                >
                  Contact
                </a>
                {/* Link to Signup */}
                <Link
                  to="/signup"
                  className="hover:text-zinc-200 hover:underline"
                >
                  Signup
                </Link>
                {/* Link to Login */}
                <Link
                  to="/login"
                  className="hover:text-zinc-200 hover:underline"
                >
                  <button className="p-2 pl-6 pr-6 rounded-lg bg-zinc-500 hover:bg-zinc-700 transition-all">
                    Login
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
