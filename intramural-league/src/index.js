import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'; // Import your CSS file here

// Make sure App.jsx lives in the same folder (src/)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
