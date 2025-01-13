import React from "react";
// import image from "/src/assets/image1.png";

function About2() {
  return (
    <>
      <div className=" p-6 flex-col items-center ">
        <div className="flex max-md:flex-col-reverse  ">
          <div className="m-2 lg:translate-x-[50px] items-center ">
            <h1 className="  text-white sm:text-[30px] md:text-[32px] lg:text-[40px] xl:text-[50px] max-md:text-[30px] font-extrabold ">
              We Offer a Complete{" "}
              <span className="text-red-500">Diagonistic</span> for Your Car
            </h1>
            <p className=" text-gray-300 ">
              For your car we would do everything for the repairing and
              maintaining of your vehicle, and also for renting
            </p>
            <br />
            <div className=" flex-col ">
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">
                  We have 24 Hour Emergency Hotline
                </p>
              </div>
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">
                  Mobile Diagnsotic Service at Home or Office
                </p>
              </div>{" "}
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">
                  Manage Your CAr Online 24/7
                </p>
              </div>
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">Car Maintenance Reminders</p>
              </div>
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">24/7 Roadside Assistance</p>
              </div>
              <div className=" flex items-center ">
                <i class="bx bx-check-circle text-3xl text-red-500 m-1"></i>
                <p className=" m-1 text-gray-300 ">
                  Customer Reviews and Ratings
                </p>
              </div>
            </div>
            <br />
            <button className=" text-white p-3 pl-5 pr-5 rounded bg-zinc-700 hover:bg-zinc-900 transition-all hover:text-white ">
              Contact Us
            </button>{" "}
          </div>
          <img
            src="https://images.pexels.com/photos/11211288/pexels-photo-11211288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="lg:h-[600px] "
          />
        </div>
      </div>
    </>
  );
}

export default About2;
