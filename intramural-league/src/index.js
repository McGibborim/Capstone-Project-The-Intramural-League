// src/index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Could not find #root element')

const root = ReactDOM.createRoot(rootEl)
root.render(<App />)
