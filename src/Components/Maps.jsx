import { Circle, CircleMarker, Marker, Polygon, Polyline, Popup, Rectangle } from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function Maps() {
    const position = [51.505, -0.09]
  return (
    <div className="maps">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Maps;
