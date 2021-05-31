import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapContainer = (props) => {
  const mapStyles = {
    height: "85vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCyy9T47gyNJOl_8rGkmkQS5D7cUHBjouQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={props.position}
      >
        <Marker position={props.position} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
