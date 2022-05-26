import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Becas.css';

function Becas(props){

    return(
        <Card className="space">
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    <p>Hola</p>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.categoria}</ListGroupItem>
                <ListGroupItem>{props.porcentaje}</ListGroupItem>
                <ListGroupItem>{props.pais}s</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Becas;

/*const fecha = new Date(props.published_date);
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("en-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    return(
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
                <ListGroupItem><b>Pais: </b>{props.pais}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Detalles</Card.Link>
            </Card.Body>
        </Card>
    );*/