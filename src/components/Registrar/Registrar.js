import React from "react";
import './Registrar.css';
import { Container } from 'react-bootstrap';
import RegistroBecas from "../RegistroBecas/RegistroBecas";

function Registrar() {
  return (
    <div>
      <div className="App">
        <h1 className="title">Registro de becas</h1>
      </div>
      <Container fluid border="dark" className="border border-dark div">
        <RegistroBecas/>
      </Container>
    </div>
  );
}

export default Registrar;
