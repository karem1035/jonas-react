import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'; // Import StrictMode
import App from './App';
import './index.css';

// Create a root and render the app in Strict Mode
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
