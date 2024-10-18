'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';




function Map() {
  return (
    <MapContainer className="map" center={[20, -80]} zoom={4} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.7617, -80.1918]}>
          <Popup>Miami - Impacted by Hurricane.</Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map;