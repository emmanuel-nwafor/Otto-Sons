import React from "react";
import Info from "./Info";
import Hero from "./Hero";
import About from "./About";
import About2 from "./About2";
import Testimonials from "./Testimonials";

function HomeRendering() {
  return (
    <>
      {/* Rendering all Home components  */}
      <div className="  bg-zinc-800 ">
        <Hero />
        <Info />
        <About />
        <About2 />
        <Testimonials />
      </div>
    </>
  );
}

export default HomeRendering;
