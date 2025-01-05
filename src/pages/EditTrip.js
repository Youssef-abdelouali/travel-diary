import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Change useHistory to useNavigate
import '../styles/EditTrip.scss';

const EditTrip = () => {
  const { id } = useParams(); // Get the trip id from the URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Initial state for the trip data
  const [trip, setTrip] = useState({
    name: '',
    date: '',
    description: '',
    image: '',
  });

  // Fetch trip data from a mock API or local data
  useEffect(() => {
    const fetchTrip = async () => {
      const fetchedTrip = {
        id,
        name: 'Mountain Escape',
        date: 'April 15 - April 20, 2024',
        description: 'Serene beauty of the mountains',
        image: 'path-to-image.jpg',
      };
      setTrip(fetchedTrip);
    };

    fetchTrip();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({
      ...trip,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle updating trip logic, send the updated data to the backend here

    console.log('Updated trip:', trip);
    // After updating, navigate back to the dashboard
    navigate('/dashboard'); // Use navigate() to go to the dashboard
  };

  return (
    <div className="edit-trip">
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Trip Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={trip.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Trip Dates</label>
          <input
            type="text"
            id="date"
            name="date"
            value={trip.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Trip Description</label>
          <textarea
            id="description"
            name="description"
            value={trip.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={trip.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTrip;
