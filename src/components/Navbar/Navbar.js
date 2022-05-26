import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import './Navbar.css';

function Cabecera(props){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Becas populares</Nav.Link>
                    <Nav.Link href="/internacionales">Becas internacionales</Nav.Link>
                    <Nav.Link href="/nacionales">Becas nacionales</Nav.Link>
                    <Nav.Link href="/registro">Registrar beca</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Cabecera;