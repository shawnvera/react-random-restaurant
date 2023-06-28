import React from 'react';
import ReactDOM from 'react-dom/client';

import NavBar from './NavBar.js';
import Menu from './Menu.js';
import Header from './Header.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
