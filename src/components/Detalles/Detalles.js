import React, { useEffect, useState } from 'react';
import { Container, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Detalles.css';
import obtenerDetalles from './obtenerDetalles';
import { API_URL } from '../url'

let id = window.location.href;
id = id.replace("http://localhost:3000/",'');

function eliminar(){
    let requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + sessionStorage.getItem("token")
        }
    };
    
    var opcion = window.confirm("¿Está seguro que desea eliminar la beca?");
    console.log(opcion);

    if(opcion == true) {
        fetch(API_URL + "/Beca/" + id, requestOptions)
        .then(response => response.json())
        .then(data => {
            window.location.replace("/populares");
        })
    }
}

function Detalles(){

    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        obtenerDetalles(id).then(setDetalles)
    }, {});

    const fecha = new Date(detalles.updated_at);
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("en-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    let requisitosLista = [];

    if (detalles.requisitos !== undefined){
        detalles.requisitos.forEach(element => {
            requisitosLista.push(<p>{element.descripcion}</p>)})
    }else{
        requisitosLista.push("No hay requisitos");
    }

    return(
        <>
            <div>
                <h1 className="title">Detalles</h1>
            </div>
            <Container fluid border="dark" className="border border-dark div">
                <Col>
                    <Card border="dark">
                        <Card.Body>
                            <div className="titleDiv">
                                <span className="titleCard">{detalles.nombre}</span>
                            </div>
                            <Card.Text>
                                {detalles.abstract}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><b>Categoria: </b>{detalles.categoria}</ListGroupItem>
                            <ListGroupItem><b>Porcentaje de financiación: </b>{detalles.porcentajeF}%</ListGroupItem>
                            <ListGroupItem><b>Fecha de publicación: </b>{fechaPublicacion}</ListGroupItem>
                            <ListGroupItem><b>Pais: </b>{detalles.pais}</ListGroupItem>
                            <ListGroupItem><b>Universidad: </b>{detalles.universidad}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Text>
                                <Card.Title>Requerimientos</Card.Title>
                                {requisitosLista}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="danger" className="buttons" onClick={eliminar}>Eliminar</Button>
                            <Button variant="primary" className="buttons">Editar</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        </>
    );
}

export default Detalles;