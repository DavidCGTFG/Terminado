import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ItinerarioContextProvider } from './context/ItinerarioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ItinerarioContextProvider>
      <App />
    </ItinerarioContextProvider>
);

