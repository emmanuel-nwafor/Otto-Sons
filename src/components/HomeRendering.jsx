import React from "react";
import Info from "./Info";
import Hero from "./Hero";
import About from "./About";

function HomeRendering() {
  return (
    <>
      {/* Rendering all Home components  */}
      <div className="">
        <Hero />
        {/* <Info />
        <About /> */}
      </div>
    </>
  );
}

export default HomeRendering;
