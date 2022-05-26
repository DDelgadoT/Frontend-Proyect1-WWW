import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Becas.css';

function Becas(props){
    const fecha = new Date(props.fecha);
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("en-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    return(
        <Col>
            <Card border="dark" className="space">
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.abstract}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Categoria: </b>{props.categoria}</ListGroupItem>
                    <ListGroupItem><b>Porcentaje de financiación: </b>{props.porcentaje}%</ListGroupItem>
                    <ListGroupItem><b>Fecha de publicación: </b>{fechaPublicacion}</ListGroupItem>
                    <ListGroupItem><b>Pais: </b>{props.pais}</ListGroupItem>
                    <ListGroupItem><b>Universidad: </b>{props.universidad}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Detalles</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Becas;