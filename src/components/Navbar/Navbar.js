import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import './Navbar.css';

function Cabecera(props){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Becas.com</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="">Becas populares</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Cabecera;