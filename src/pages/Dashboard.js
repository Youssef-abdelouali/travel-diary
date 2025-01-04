import React from 'react';
import TripCard from '../components/TripCard';
import '../styles/Dashboard.scss'; // Import the Dashboard.css file
import Mountain from '../assetsDash/Mountain.jpg'
import City from '../assetsDash/City.jpg'
import Beach from '../assetsDash/Beach.jpg'
const Dashboard = () => {
  const trips = [
    { name: 'Mountain Escape', date: 'April 15 - April 20, 2024', description: 'Serene beauty of the mountains', image: Mountain },
    { name: 'City Lights Adventure', date: 'May 10 - May 15, 2024', description: 'Vibrant nightlife in the city', image: City },
    { name: 'Beach Paradise', date: 'June 5 - June 10, 2024', description: 'Relax on pristine beaches', image: Beach }
  ];

  return (
    <div className="dashboard">
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter">
          <label>Trip Type</label>
          <select>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
          </select>
        </div>
        <div className="filter">
          <label>Date Range</label>
          <input type="date" />
        </div>
      </div>
      <div className="trip-cards">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
