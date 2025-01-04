import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../styles/Home.scss'; // Make sure your styles are applied

const Home = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Handle button click to navigate to Dashboard
  const handleNavigate = () => {
    navigate('/dashboard'); // Navigate to the Dashboard page
  };

  return (
    <div className="hero">
      <h1>Embark on Your Next Adventure</h1>
      <p>Discover new destinations and make unforgettable memories with TravelDiary.</p>
      <button className="start-btn" onClick={handleNavigate}>Start Your Journey</button>
    </div>
  );
};

export default Home;
