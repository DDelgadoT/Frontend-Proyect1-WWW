import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './Inicio.css';

import NoticiasLista from '../Noticias/NoticiasLista';
import BecasPopulares from '../Becas/BecasPopulares';

function Inicio(){

    return(
        <Container border="dark" className="div">
            <Row>
                <Col sm={8} className="border border-dark">
                    <h1>Becas más populares</h1>
                    <BecasPopulares />
                </Col>
                <Col sm={4} className="border border-dark overflow divNoticias">
                    <h1>Noticias recientes relacionadas a tecnología</h1>
                    <NoticiasLista />
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;