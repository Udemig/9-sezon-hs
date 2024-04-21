import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { icon } from 'leaflet';
import { setPath } from '../redux/slices/flightSlice';

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flight);

  const dispatch = useDispatch();

  // marker için kendi iconumuzu oluşturalım
  const planeIcon = icon({
    iconUrl: 'plane-icon.png',
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[38.891818, 35.435076]}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker
          key={flight.id}
          icon={planeIcon}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>

              <button onClick={() => setDetailId(flight.id)} className="w-100">
                Detay
              </button>

              {path.length > 0 && (
                <button onClick={() => dispatch(setPath([]))}>
                  Rotayı Temizle
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
