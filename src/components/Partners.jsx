import React from "react";
import brand1 from "/src/assets/brand1.png";
import brand2 from "/src/assets/brand2.png";
import brand3 from "/src/assets/brand3.png";
import brand4 from "/src/assets/brand4.png";

function Partners() {
  return (
    <>
      <marquee behavior="scroll" direction="right">
        <div className=" flex items-center justify-evenly p-5 ">
          <img src={brand1} alt="" className=" h-24 max-md:h-14 " />
          <img src={brand2} alt="" className=" h-24 max-md:h-14 " />
          <img src={brand3} alt="" className=" h-24 max-md:h-14 " />
          <img src={brand4} alt="" className=" h-24 max-md:h-14 " />
        </div>
      </marquee>
    </>
  );
}

export default Partners;
