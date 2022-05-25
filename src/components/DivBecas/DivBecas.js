import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './DivBecas.css';

import Noticias from '../Noticias/Noticias';

function DivBecas(props){

    return(
        <Container className="div">
            <Row>
                <Col sm={8} className="divBecas">Becas</Col>
                <Col sm={4} className="divNoticias">
                    <Noticias />
                </Col>
            </Row>
        </Container>
    );
}

export default DivBecas;