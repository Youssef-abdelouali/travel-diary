import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/TripCard.scss';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.name} />
      <h3>{trip.name}</h3>
      <p>{trip.date}</p>
      <p>{trip.description}</p>
      <Link to="/map">
          <button>View on Map</button>
      </Link>
    </div>
         
  );
};

export default TripCard;
