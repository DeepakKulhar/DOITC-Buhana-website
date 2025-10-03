import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Utility → Google-style gradient pin
const createGooglePin = (gradient: string) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        width: 30px;
        height: 40px;
        background: linear-gradient(to bottom, ${gradient});
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(0deg);
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      ">
        <div style="
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 2px rgba(0,0,0,0.3);
        "></div>
      </div>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40], // bottom tip is anchor
    popupAnchor: [0, -36],
  });

// Default (Orange → Gold)
const orangePin = createGooglePin("#f97316, #facc15");
// Active (Green gradient)
const greenPin = createGooglePin("#16a34a, #059669");

export default function NearestKiosk() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const kiosks = [
    { lat: 28.26156053980828, lng: 75.96133455814288, name: "Kuharwas E-Mitra" },
    { lat: 28.23589, lng: 75.85254, name: "Badbar" },
    { lat: 28.17613, lng: 76.02666, name: "Bhaloth" },
    { lat: 28.20986, lng: 75.93333, name: "Khandwa" }, // focus
    { lat: 28.2030102, lng: 75.8723175, name: "Buhana" },
    { lat: 28.1757435, lng: 76.0404588, name: "Dhani Bhaloth" },
    { lat: 28.2733912, lng: 75.905347, name: "Dhoolwa" },
    { lat: 28.2040888, lng: 75.8776312, name: "Gaadli" },
    { lat: 28.20929, lng: 75.98157, name: "Gaseda" },
    { lat: 28.17693, lng: 75.95682, name: "Gunti" },
    { lat: 28.21115, lng: 75.91512, name: "Jhanjha" },
    { lat: 28.153655, lng: 75.96044833, name: "Kajlan" },
    { lat: 28.17467, lng: 75.84933, name: "Kalakhari" },
    { lat: 28.15863, lng: 75.87877, name: "Lambi Aheer" },
    { lat: 28.14065, lng: 75.95066, name: "Pacheri kalan" },
    { lat: 28.1751288, lng: 75.9926122, name: "Panthroli" },
    { lat: 28.17931, lng: 75.96735, name: "Saantor" },
    { lat: 28.21004, lng: 76.04229, name: "Sohali" },
    { lat: 28.20607, lng: 75.83141, name: "Sultana Aheeran" },
    { lat: 28.22319, lng: 75.9827, name: "Udamandi" },
    { lat: 28.26244, lng: 75.93456, name: "Jharoda" },
  ];

  const center = { lat: 28.20986, lng: 75.93333 };

 return (
    <div className="w-full h-screen">
      <MapContainer center={center} zoom={13} className="w-full h-full" scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {kiosks.map((kiosk, i) => (
          <Marker
            key={i}
            position={[kiosk.lat, kiosk.lng]}
            icon={activeIndex === i ? greenPin : orangePin}
            eventHandlers={{
              click: () => setActiveIndex(i),
            }}
          >
            <Popup>
              <b>{kiosk.name}</b>
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${kiosk.lat},${kiosk.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}