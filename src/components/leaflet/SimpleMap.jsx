import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useRef } from 'react';

const SimpleMap = ({latitude, longitude, office}) => {
  const mapRef = useRef(null);

  return (
    <MapContainer 
      center={[latitude, longitude]} 
      zoom={13} 
      ref={mapRef} 
      style={{height: '100%', width: '100%'}} 
    >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            {office}
          </Popup>
        </Marker>
    </MapContainer>
  )
}

export default SimpleMap;