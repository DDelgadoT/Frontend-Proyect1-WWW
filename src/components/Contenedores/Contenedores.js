import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Contenedores.css';

import NoticiasLista from '../Noticias/NoticiasLista';

function Contenedores(props){

    return(
        <Container className="div">
            <Row>
                <Col sm={8} className="divBecas">
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                    <p>Hola</p>
                </Col>
                <Col sm={4} className="divNoticias">
                    <h1>Noticias recientes relacionadas a tecnología</h1>
                    <NoticiasLista />
                </Col>
            </Row>
        </Container>
    );
}

export default Contenedores;