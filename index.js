import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Likhesh24BCE0463App from './App';

/* ===================================================================
   Entry Point — Likhesh | 24BCE0463
   Renders the root App component into the DOM.
   =================================================================== */

console.log('[Likhesh | 24BCE0463] Application starting...');

const likheshRoot_24BCE0463 = ReactDOM.createRoot(
  document.getElementById('root')
);

likheshRoot_24BCE0463.render(
  <React.StrictMode>
    <Likhesh24BCE0463App />
  </React.StrictMode>
);

console.log('[Likhesh | 24BCE0463] Application rendered successfully');
