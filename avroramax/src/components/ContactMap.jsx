// src/components/ContactMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Для кастомизации маркера
import 'leaflet/dist/leaflet.css'; // Стили для карты

// Координаты для местоположения (например, офис в Караганде)
const position = [49.793737408326024, 73.08446851188751];

const ContactMap = () => {
  return (
    <div>
      <h2 className="section-title">Наш офис</h2>
      <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new L.Icon({ iconUrl: '/images/placeholder.png', iconSize: [32, 32], iconAnchor: [12, 41] })}>
          <Popup>
            Мы находимся по адресу: <br />
            ул. Ержанова, 18/2, Караганда
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
