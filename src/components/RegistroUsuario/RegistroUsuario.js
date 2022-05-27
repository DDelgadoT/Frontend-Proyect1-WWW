import React from "react"
import { Container, Form, Button } from 'react-bootstrap';
import registrarUsuario from './registrarUsuario';
import { CabeceraLogin } from "../Navbar/Navbar";

import './RegistroUsuario.css';

function handleSubmit(event) {
  event.preventDefault()

  let body = {
      email: event.target.elements.formCorreo.value,
      password: event.target.elements.formContraseña.value,
  }

  registrarUsuario(body);
}

function registroUsuario(){

  return(
    <>
      <CabeceraLogin />
      <div className="App">
        <h1 className="title">Registrando usuario</h1>
      </div>
      <Container fluid border="dark" className="border border-dark div">
        <h4>Ingrese los siguientes datos</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el correo electrónico" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese la contraseña" required/>
            </Form.Group>
            <Button variant="primary" type="submit">Registrarse</Button>
            
        </Form>
      </Container>
    </>
  )
}
export default registroUsuario;