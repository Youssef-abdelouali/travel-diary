import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddEditTrip from './pages/AddEditTrip';
import MapPage from './pages/MapPage';
import Auth from './pages/Auth';
import EditTrip from './pages/EditTrip';
import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-edit-trip" element={<AddEditTrip />} />
          <Route path="/edit-trip/:id" element={<EditTrip/>} /> 
          <Route path="/map" element={<MapPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
