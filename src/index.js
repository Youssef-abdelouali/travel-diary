import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from './App';
import './styles/index.scss';

// Create a root using the new API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
