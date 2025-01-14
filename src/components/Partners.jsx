import React from "react";
import brand1 from "/src/assets/brand1.png";
import brand2 from "/src/assets/brand2.png";
import brand3 from "/src/assets/brand3.png";
import brand4 from "/src/assets/brand4.png";

function Partners() {
  return (
    <div className="relative w-full overflow-hidden p-10 ">
      {/* <h1 className="text-white m-5">Partners</h1> */}
      {/* Gradient Effect for Cool Sides */}
      <div className="absolute top-0 left-0 h-full w-[500px] max-md:w-[150px] bg-gradient-to-r from-zinc-800  via-zinc-800 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-[500px] max-md:w-[150px] bg-gradient-to-l from-zinc-800 via-zinc-800 to-transparent z-10"></div>

      {/* Scrolling Content */}
      <div className="flex items-center justify-evenly space-x-10 animate-scroll hover:pause-scroll">
        <img src={brand1} alt="Brand 1" className="h-24 max-md:h-14" />
        <img src={brand2} alt="Brand 2" className="h-24 max-md:h-14" />
        <img src={brand3} alt="Brand 3" className="h-24 max-md:h-14" />
        <img src={brand4} alt="Brand 4" className="h-24 max-md:h-14" />
        {/* Repeat the images for continuous scrolling */}
        <img src={brand1} alt="Brand 1" className="h-24 max-md:h-14" />
        <img src={brand2} alt="Brand 2" className="h-24 max-md:h-14" />
        <img src={brand3} alt="Brand 3" className="h-24 max-md:h-14" />
        <img src={brand4} alt="Brand 4" className="h-24 max-md:h-14" />
      </div>
    </div>
  );
}

export default Partners;
