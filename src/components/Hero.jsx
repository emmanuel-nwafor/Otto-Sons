import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <>
      <div className=" flex-col bg-[url('/src/assets/img4.jpg')] bg-cover bg-center h-[100vh] ">
        <NavBar />

        <div className="  flex max-md:flex-col justify-evenly max-md:justify-center ">
          {/* Hero resources */}
        </div>
      </div>
    </>
  );
}

export default Hero;
