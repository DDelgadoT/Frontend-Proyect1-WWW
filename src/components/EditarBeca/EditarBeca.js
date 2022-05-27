import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import putBeca from './putBeca';
import obtenerDetalles from '../Detalles/obtenerDetalles';
import Cabecera from '../Navbar/Navbar';

import './EditarBeca.css';

let id = window.location.href;
id = id.replace("http://localhost:3000/editar/",'');

function handleSubmit(event) {
    event.preventDefault()

    let arrayRequisitos = event.target.elements.formRequisitos.value.split(".");
    arrayRequisitos.pop();

    let requisitos = []
    
    arrayRequisitos.forEach(element => {
        let requisitoTemporal = {}
        if(element.charAt(0) === " "){
            element = element.slice(1);
        }
        requisitoTemporal["descripcion"] = element;
        requisitos.push(requisitoTemporal);
    })

    let body = {
        nombre: event.target.elements.formNombreBeca.value,
        categoria: event.target.elements.formCategoria.value,
        porcentajeF: parseInt(event.target.elements.formPorcentaje.value),
        pais: event.target.elements.formPais.value,
        universidad: event.target.elements.formUniversidad.value,
        requisitos: requisitos,
        updated_at: new Date(event.target.elements.formFecha.value)
    }

    putBeca(body);
    
}

function EditarBeca() {

    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        obtenerDetalles(id).then(setDetalles)
    }, {});

    const fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("es-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

    let valueSelect;
    if(detalles.categoria == "Nacional"){
        valueSelect = "Nacional";
    }else{
        valueSelect = "Internacional";
    }

    

    let requisitos = [];
    if (detalles.requisitos !== undefined){
        detalles.requisitos.forEach(element => {
            requisitos.push(element.descripcion)
        });
    }else{
        requisitos.push("No hay requisitos");
    }
    requisitos = requisitos.join(". ");

    return (
    <>
    <Cabecera />
        <div className="App">
            <h1 className="title">Edición de beca</h1>
        </div>
        <Container fluid border="dark" className="border border-dark div">      
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFecha">
                    <Form.Label>Fecha de actualización</Form.Label>
                    <Form.Control type="text" placeholder={fechaPublicacion} readOnly /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreBeca">
                    <Form.Label>Nombre de la beca</Form.Label>
                    <Form.Control type="text" value={detalles.nombre} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Categoría:</Form.Label>
                    <Form.Select aria-label="Default select example" value={valueSelect}>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPorcentaje">
                    <Form.Label>Porcentaje de financiación:</Form.Label>
                    <Form.Control type="number" min="0" max="100" value={detalles.porcentajeF} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPais">
                    <Form.Label>Pais que ofrece la beca:</Form.Label>
                    <Form.Control type="text" value={detalles.pais} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUniversidad">
                    <Form.Label>Universidad que ofrece la beca:</Form.Label>
                    <Form.Control type="text" value={detalles.universidad} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRequisitos">
                    <Form.Label>Requisitos: <b>(Separe los requisitos por puntos)</b></Form.Label>
                    <Form.Control as="textarea" rows={3} value={requisitos}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </Container>
    </>
  );
}

export default EditarBeca;
