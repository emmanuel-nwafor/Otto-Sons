import React from "react";
import LiveMap from "./LiveMap";

function Contact() {
  return (
    <>
      <LiveMap />

      <div className="">
        <h1 className=" text-3xl p-4 m-2 text-gray-300 ">Contact Us</h1>

        <div className="flex-col">
          <input type="text" className="m-2 h-20 " />
          <br />
          <input type="text" className="m-2 h-20 " />
          <br />
          <input type="text" className="m-2 h-20 " />
        </div>
      </div>
    </>
  );
}

export default Contact;
