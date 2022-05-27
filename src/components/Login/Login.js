import React from "react"
import { Container, Form, Button } from 'react-bootstrap';
import ingresarUsuario from './ingresarUsuario';
import { CabeceraLogin } from "../Navbar/Navbar";

import './Login.css';

function handleSubmit(event) {
    event.preventDefault()
  
    let body = {
        email: event.target.elements.formCorreo.value,
        password: event.target.elements.formContraseña.value,
    }
  
    ingresarUsuario(body);
  }

function Login(){

    return(
        <>
            <CabeceraLogin />
            <Container fluid border="dark" className="border border-dark div">
                <h1>Bienvenido a Becas.com</h1>
                <h4>Ingrese los datos para ingresar</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCorreo">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el correo electrónico" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese la contraseña" requireds/>
                </Form.Group>
                <Button variant="primary" type="submit">Ingresar</Button>                
            </Form>
            </Container>
        </>
    )
}
export default Login;