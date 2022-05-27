import React from 'react';
import { Form, Button } from 'react-bootstrap';
import postBeca from './postBeca';

import './RegistrarBeca.css';

function cleanFormAfterSubmit(){
    console.log("Hola");
}

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
        requisitos: requisitos
    }

    postBeca(body);
    
}

function RegistrarBeca() {

    const fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("es-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

  return (
    <>
        <Form id="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFecha">
                <Form.Label>Fecha de creación</Form.Label>
                <Form.Control type="text" placeholder={fechaPublicacion} readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNombreBeca">
                <Form.Label>Nombre de la beca</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoría:</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="Nacional">Nacional</option>
                    <option value="Internacional">Internacional</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPorcentaje">
                <Form.Label>Porcentaje de financiación:</Form.Label>
                <Form.Control type="number" min="0" max="100" placeholder="Porcentaje de financiación" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPais">
                <Form.Label>Pais que ofrece la beca:</Form.Label>
                <Form.Control type="text" placeholder="Nombre del pais" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUniversidad">
                <Form.Label>Universidad que ofrece la beca:</Form.Label>
                <Form.Control type="text" placeholder="Nombre de la universidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequisitos">
                <Form.Label>Requisitos: <b>(Separe los requisitos por puntos)</b></Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Registrar</Button>
        </Form>
    </>
  );
}

export default RegistrarBeca;
