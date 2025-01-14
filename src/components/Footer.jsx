import React from "react";
import logo from "/src/assets/logo1.png";

function Footer() {
  return (
    <>
      <footer className=" flex-col bg-zinc-900 ">
        <div className="flex justify-between items-center p-7">
          <div className="flex justify-between  ">
            <a
              href=""
              className=" m-4 hover:text-white text-gray-400 hover:underline max-md:text-[10px] "
            >
              License
            </a>
            <a
              href=""
              className=" m-4 hover:text-white text-gray-400 hover:underline max-md:text-[10px] "
            >
              Privacy and Policy
            </a>
            <a
              href=""
              className=" m-4 hover:text-white text-gray-400 hover:underline max-md:text-[10px] "
            >
              Faqs
            </a>
          </div>
          <div className="flex items-center">
            <h1 className=" text-xl text-gray-400 max-md:hidden ">Otto-Sons</h1>
            <img src={logo} alt="logo" className=" h-24 m-4 max-md:h-20" />
          </div>
        </div>
        <p href="" className=" text-gray-400 text-center ">
          &copy; copyright Otto-Sons 2025
        </p>
      </footer>
    </>
  );
}

export default Footer;
