import React from "react";
import Info from "./Info";
import Hero from "./Hero";
import About from "./About";
import About2 from "./About2";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Contact from "./Contact";

function HomeRendering() {
  return (
    <>
      {/* Rendering all Home components  */}
      <div className="  bg-zinc-800 ">
        <Hero />
        <Info />
        <About />
        <About2 />
        <Partners />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}

export default HomeRendering;
