import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import Program from './Components/Program/Program';
import Header from './Components/Header/Header';
import Nav from './Components/Nav-Log/nav-log';
import Auth from './Components/Auth/auth';
import { BrowserRouter } from 'react-router-dom';

export {Navbar, Program, Header, Nav, Auth};

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
