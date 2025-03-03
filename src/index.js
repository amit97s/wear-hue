import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import App from './App';  // Import the App component
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing

// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your app with BrowserRouter for routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
