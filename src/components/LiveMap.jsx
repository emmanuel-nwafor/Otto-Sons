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

const LiveMap = () => {
  const position = [40.73061, -73.935242]; // Replace with your latitude and longitude

  return (
    <div>
      <MapContainer
        center={position}
        zoom={14}
        className="leaflet-container m-20"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            Otto-Sons Location <br />
            77 Railroad Avenue
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveMap;
