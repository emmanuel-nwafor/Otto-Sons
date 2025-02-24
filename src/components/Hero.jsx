import React from "react";
import NavBar from "./NavBar";
// import { useNavigate } from "react-router-dom";

function Hero() {
  return (
    <>
      <NavBar />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 h-[100vh] sm:h-[140vh] md:h-[140vh] lg:h-[120vh] "></div> */}

      <div className="  bg-[url('/src/assets/img5.jpg')] bg-cover bg-center  ">
        <div className="  flex-col max-md:flex-col justify-evenly max-md:justify-center ">
          {/* Hero resources */}
          <div className=" h-[100vh] sm:h-[140vh] md:h-[140vh] lg:h-[120vh] flex items-center ">
            <div className="flex-col  m-8">
              {" "}
              <h1 className=" text-white lg:text-[60px] max-md:text-[40px] font-extrabold ">
                #1 Car Agency
              </h1>
              <p className=" text-white text-[18px] ">
                Looking for reliable car rental or expert car repairs?{" "}
                <br className=" max-md:hidden " /> At Otto-Sons, we offer a wide
                range of vehicles for rent, <br className=" max-md:hidden " />{" "}
                from compact cars to SUVs, tailored to fit your needs.{" "}
                <br className=" max-md:hidden " /> Your trusted car rental and
                repair service.
              </p>
              <br />
              <div className="">
                <div className="flex">
                  <img
                    src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className=" h-[40px] w-[40px] rounded-full border-2 border-white "
                    alt="img"
                  />
                  <img
                    src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className=" h-[40px] w-[40px] translate-x-[-20px] border-2 border-white rounded-full "
                    alt="img"
                  />
                  <img
                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className=" h-[40px] w-[40px] translate-x-[-40px] border-2 border-white rounded-full "
                    alt="img"
                  />
                  <img
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className=" h-[40px] w-[40px] translate-x-[-60px] border-2 border-white rounded-full "
                    alt="img"
                  />
                </div>
                <p className="text-white text-[17px] ">
                  1000+ staisfied customers
                </p>
                <button
                  className=" text-white p-3 pl-10 pr-10 rounded bg-zinc-600
               hover:bg-zinc-800 transition-all hover:cursor-not-allowed mt-3 z-10 "
                >
                  Signup
                </button>
              </div>
              {/* <br /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
