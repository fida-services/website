import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'fonts/Fonts/WEB/css/satoshi.css';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
