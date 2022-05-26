import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './Contenedores.css';

import NoticiasLista from '../Noticias/NoticiasLista';
import BecasLista from '../Becas/BecasLista';

function Contenedores(){

    return(
        <Container border="dark" className="div">
            <Row>
                <Col sm={8} className="border border-dark divBecas">
                    <h1>Becas más populares</h1>
                    <BecasLista />
                </Col>
                <Col sm={4} className="border border-dark">
                    <h1>Noticias recientes relacionadas a tecnología</h1>
                    <NoticiasLista />
                </Col>
            </Row>
        </Container>
    );
}

export default Contenedores;