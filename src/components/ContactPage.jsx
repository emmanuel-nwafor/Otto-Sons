import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing default marker icons in Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage = () => {
  const position = [40.73061, -73.935242]; // Replace with your latitude and longitude

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-400 mb-8">Contact Us</h1>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="relative z-10 container mx-auto">
          <div className="bg-black bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-600 
                  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-600
                   rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-600
                   rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-600 text-white py-2 px-4 rounded-md hover:bg-zinc-700
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Message
              </button>
              <div className=" flex justify-evenly items-center ">
                <div className=" pl-10 pr-20 p-[0.2px] bg-blue-600 "></div>
                <p className="text-white text-center">OR</p>
                <div className=" pl-10 pr-20 p-[0.2px] bg-blue-600 "></div>
              </div>
              <div className="flex items-center justify-center">
                <i
                  class="bx bxl-twitter p-2 m-2 text-[15px] transition-all 
                rounded-full hover:bg-blue-600 hover:text-white text-blue-600 border-blue-600 "
                ></i>
                <i
                  class="bx bxl-whatsapp p-2 m-2 text-[15px] transition-all
                 border-green-600 text-green-600 hover:text-white hover:bg-green-600 rounded-full "
                ></i>
                <i
                  class="bx bxl-facebook p-2 m-2 text-[15px] transition-all
                 rounded-full hover:bg-blue-600 hover:text-white text-blue-700 border-blue-700 "
                ></i>{" "}
              </div>
            </form>
          </div>
        </div>

        {/* Live Map */}
        <div
          className=" z-0 relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[530px] rounded-lg 
        shadow-lg overflow-hidden "
        >
          <MapContainer center={position} zoom={14} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; Otto-sons "
            />
            <Marker position={position}>
              <Popup>
                Otto-Sons Location <br /> 77 Railroad Avenue
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
