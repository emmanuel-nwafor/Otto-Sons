import React from "react";
// import error from "../assets/error.png";

function Error() {
  return (
    <>
      <div className="  bg-gray-900 h-[100vh] max-md:flex-col flex items-center justify-center ">
        <i class="bx bxs-error text-[150px] text-red-500"></i>{" "}
        <p className=" text-white text-[180px] ">404</p>
        <p className=" text-white ">Error page not found</p>
      </div>
    </>
  );
}

export default Error;
