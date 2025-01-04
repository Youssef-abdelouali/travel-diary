import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import '../styles/Map.scss';

const Map = ({ trips }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> {/* Use the environment variable */}
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 37.7749, lng: -122.4194 }} // Default center coordinates
        zoom={5}
      >
        {trips.map((trip, index) => (
          <Marker
            key={index}
            position={{ lat: trip.coordinates.lat, lng: trip.coordinates.lng }} // Ensure correct trip coordinates
            title={trip.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
