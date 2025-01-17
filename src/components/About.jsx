import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <div id="about"></div>
      <div className="flex-col p-6 ">
        <div className="flex max-md:flex-col items-center justify-center">
          <div>
            <img
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className=" rounded-xl "
            />
            <div className=" h-42 w-32 translate-y-[-100px] m-4 bg-red-600 p-6 text-white ">
              <h1 className=" text-sm ">
                More Than <br /> <br /> <span className="text-[50px] ">20</span>
                <br /> Years of Experience
              </h1>
            </div>
          </div>
          <div className=" m-2 lg:translate-x-[-50px] ">
            <h1 className=" text-white sm:text-[30px] md:text-[32px] lg:text-[50px] xl:text-[50px] max-md:text-[30px] font-extrabold ">
              Who we are
            </h1>
            <p className="text-gray-300 text-[17px] ">
              Welcome to Otto-Sons, your trusted partner for all car renting and
              repairing since 1999. <br className=" max-md:hidden " /> For over
              two decades, we have been dedicated to simplifying vehicle
              solutions for individuals and businesses.
              <br className=" max-md:hidden " />
              Whether you’re looking to rent a reliable car for a trip or need
              expert
              <br className=" max-md:hidden " />
              repair services to get your vehicle back on the road, Otto-Sons
              delivers quality, efficiency,
              <br className=" max-md:hidden " />
              and value. With a team of experienced professionals and a
              commitment to excellence,
              <br className=" max-md:hidden " />
              we ensure every service is tailored to meet your unique needs. At
              Otto-Sons,
              <br className=" max-md:hidden " />
              we don’t just fix cars or rent them, we drive satisfaction.
              <br className=" max-md:hidden " />
            </p>
            <br />
            <button className=" text-white p-2 pl-5 pr-5 border-2 transition-all hover:bg-slate-700 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
