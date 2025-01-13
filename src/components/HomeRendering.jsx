import React from "react";
import Info from "./Info";
import Hero from "./Hero";
import About from "./About";

function HomeRendering() {
  return (
    <>
      {/* Rendering all Home components  */}
      <Hero />
      <Info />
      <About />
    </>
  );
}

export default HomeRendering;
