import React from "react";
import Info from "./Info";
import Hero from "./Hero";
import About from "./About";
import About2 from "./About2";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

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
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

export default HomeRendering;
