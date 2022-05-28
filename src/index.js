import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import RegistroUsuario from './components/RegistroUsuario/RegistroUsuario';
import Populares from "./components/Populares/Populares";
import Nacionales from "./components/Nacionales/Nacionales";
import Internacionales from "./components/Internacionales/Internacionales";
import RegistroBeca from "./components/RegistroBeca/RegistroBeca";
import Detalles from './components/Detalles/Detalles';
import Footer from './components/Footer/Footer';
import EditarBeca from './components/EditarBeca/EditarBeca';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/:id" element={<Detalles />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/nacionales" element={<Nacionales />} /> 
        <Route path="/internacionales" element={<Internacionales />} />
        <Route path="/registroBeca" element={<RegistroBeca />} />
        <Route path="/editar/:id" element={<EditarBeca />} />
        <Route path="/registrarse" element={<RegistroUsuario />} />
        <Route exact path="/Frontend-Proyect1-WWW/" element={<App />} />
      </Routes>
      <Footer />
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
