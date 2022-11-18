import React from "react";
import L from "leaflet";

const position = [51.505, -0.09]

function Maps () {


    
  const componentDidMount = () => {
    // create map
    this.map = L.map("map", {
      center: position,
      zoom: 16,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    L.marker(position)
  }
  componentDidMount()
  

    return (
        <div id="map" />
    );
  
}

export default Maps;
