import "./firebase";
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

if (!container) {
  throw new Error("Root element #app not found");
}

const root = createRoot(container);
root.render(<App />);
