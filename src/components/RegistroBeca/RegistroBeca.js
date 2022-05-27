import React from "react";
import './RegistroBeca.css';
import { Container } from 'react-bootstrap';
import RegistrarBeca from "../RegistrarBeca/RegistrarBeca";
import Cabecera from '../Navbar/Navbar';

function RegistroBeca() {

  if(sessionStorage.getItem("token") != null){

    return (
      <>
        <Cabecera />
        <div className="App">
          <h1 className="title">Registro de becas</h1>
        </div>
        <Container fluid border="dark" className="border border-dark div">
          <RegistrarBeca/>
        </Container>
      </>
    );

  }else{
    alert("Debes ingresar");
    window.location.replace("/");
  }
}

export default RegistroBeca;
