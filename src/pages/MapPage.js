import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/MapPage.scss';

const MapPage = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track if Google Maps is loaded
  const [mapError, setMapError] = useState(null); // Track if there is an error loading the map

  // Sample trips data with coordinates
  const trips = [
    { name: 'Mountain Escape', date: 'April 15 - April 20, 2024', description: 'Serene beauty of the mountains', coordinates: { lat: 40.748817, lng: -73.985428 } },
    { name: 'City Lights Adventure', date: 'May 10 - May 15, 2024', description: 'Vibrant nightlife in the city', coordinates: { lat: 34.052235, lng: -118.243683 } },
    { name: 'Beach Paradise', date: 'June 5 - June 10, 2024', description: 'Relax on pristine beaches', coordinates: { lat: 36.1699, lng: -115.1398 } },
  ];

  const handleMarkerClick = (trip) => {
    setSelectedTrip(trip); // Update selected trip when a marker is clicked
  };

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Default center coordinates (San Francisco)
    lng: -122.4194,
  };

  // Handle error if Google Maps fails to load
  const onError = (error) => {
    setMapError(error.message);
    setIsLoading(false);
  };

  return (
    <div className="map-page">
      <h2>Explore Your Travel Locations</h2>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Use the environment variable
        onLoad={() => setIsLoading(false)} // Set loading to false when Google Maps is loaded
        onError={onError} // Handle errors if Google Maps fails to load
      >
        {isLoading ? (
          <div>Loading Map...</div> // Show loading state until the map is ready
        ) : mapError ? (
          <div>Error loading map: {mapError}</div> // Show error message if Google Maps failed to load
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
          >
            {trips.map((trip, index) => (
              <Marker
                key={index}
                position={trip.coordinates}
                onClick={() => handleMarkerClick(trip)}
              />
            ))}

            {selectedTrip && (
              <InfoWindow
                position={selectedTrip.coordinates}
                onCloseClick={() => setSelectedTrip(null)}
              >
                <div>
                  <h3>{selectedTrip.name}</h3>
                  <p>{selectedTrip.description}</p>
                  <p>{selectedTrip.date}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default MapPage;
