import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarGreen from './Components/Navbar-Green/NavbarGreen';
import Timer from './Components/Timer/Timer';
import Printer from './Components/Printer/Printer';
import Nav from './Components/Nav-Log/nav-log';
import Auth from './Components/Auth/auth';
import { BrowserRouter } from 'react-router-dom';

export {NavbarGreen, Timer, Printer, Nav, Auth};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
