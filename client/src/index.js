import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const rootContainer = document.getElementById('root')
if (rootContainer !== null) {
    ReactDOM.createRoot(rootContainer).render(<App />)
}

