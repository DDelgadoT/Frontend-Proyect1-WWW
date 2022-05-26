import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nacionales from "./components/Nacionales/Nacionales";
import Internacionales from "./components/Internacionales/Internacionales";
import Registrar from "./components/Registrar/Registrar";
import Cabecera from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Cabecera />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nacionales" element={<Nacionales />} />
        <Route path="/internacionales" element={<Internacionales />} />
        <Route path="/registro" element={<Registrar />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
