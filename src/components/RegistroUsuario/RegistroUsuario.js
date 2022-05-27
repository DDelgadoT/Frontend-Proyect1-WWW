import React from "react";
import './RegistroUsuario.css';
import { Container } from 'react-bootstrap';
import RegistrarBeca from "../RegistrarBeca/RegistrarBeca";
import Cabecera from '../Navbar/Navbar';

function RegistroUsuario() {
  return (
    <>
      <Cabecera />
      <div className="App">
        <h1 className="title">Registro de usuario</h1>
      </div>
      <Container fluid border="dark" className="border border-dark div">
        <RegistrarBeca/>
      </Container>
    </>
  );
}

export default RegistroUsuario;
