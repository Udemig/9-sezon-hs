import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// App bilşenine yazılan kodları html'in içerisndeki root id'li bileşenin içerisne gönderir
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
