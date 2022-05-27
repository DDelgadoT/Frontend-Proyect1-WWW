import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Cabecera from '../Navbar/Navbar';

import './Populares.css';

import NoticiasLista from '../Noticias/NoticiasLista';
import BecasPopulares from '../Becas/BecasPopulares';

function Populares(){

    return(
        <>  
            <Cabecera />
            <Container border="dark" className="div">
                <Row>
                    <Col sm={8} className="border border-dark">
                        <h1>Becas más populares</h1>
                        <BecasPopulares />
                    </Col>
                    <Col sm={4} className="border border-dark overflow divNoticias">
                        <h3 className="titleNews">Noticias recientes relacionadas a tecnología</h3>
                        <NoticiasLista />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Populares;