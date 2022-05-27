import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import './Navbar.css';

function cerrarSesion(){
    console.log("Hola");
}

export function CabeceraLogin(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/">Ingresar</Nav.Link>
                        <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}

function Cabecera(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/populares">Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/populares">Becas populares</Nav.Link>
                    <Nav.Link href="/internacionales">Becas internacionales</Nav.Link>
                    <Nav.Link href="/nacionales">Becas nacionales</Nav.Link>
                    <Nav.Link href="/registroBeca">Registrar beca</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/" onclick={cerrarSesion}>Cerrar sesión</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Cabecera;