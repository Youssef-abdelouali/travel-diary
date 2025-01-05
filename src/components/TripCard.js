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
      <div className="trip-card-buttons">
        <Link to="/map">
          <button>View on Map</button>
        </Link>
        <Link to={`/edit-trip/${trip.id}`}>
          <button className="edit-btn">Edit Trip</button>
        </Link>
      </div>
    </div>
  );
};

export default TripCard;
