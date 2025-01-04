import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>TravelDiary</h1>
      </div>
      <nav className='navy'>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-edit-trip">Add/Edit Trip</Link>
        <Link to="/map">Map</Link>
        <Link to="/auth">Auth</Link>
      </nav>
    </header>
  );
};

export default Header;
