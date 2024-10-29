import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import './index.css';

// Create a root and render the app
const root = createRoot(document.getElementById('root'));
root.render(<App />);
