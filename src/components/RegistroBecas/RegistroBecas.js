import React from "react";
import './RegistroBecas.css';
import { Form, Button } from 'react-bootstrap';

function RegistroBecas() {

    const fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.toLocaleString("es-US", {month: "long"});
    let dia = fecha.toLocaleString("en-US", {day: "2-digit"});
    let fechaPublicacion = dia + "/" + mes + "/" + año;

  return (
    <div className="">
        <Form>
        <Form.Group className="mb-3" controlId="formNombreBeca">
                <Form.Label>Fecha de creación</Form.Label>
                <Form.Control type="text" placeholder={fechaPublicacion} readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNombreBeca">
                <Form.Label>Nombre de la beca</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPorcentaje">
                <Form.Label>Porcentaje de financiación:</Form.Label>
                <Form.Control type="number" placeholder="Porcentaje de financiación" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPais">
                <Form.Label>Pais que ofrece la beca:</Form.Label>
                <Form.Control type="text" placeholder="Nombre del pais" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUniversidad">
                <Form.Label>Universidad que ofrece la beca:</Form.Label>
                <Form.Control type="text" placeholder="Nombre de la universidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUniversidad">
                <Form.Label>Requerimientos:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  );
}

export default RegistroBecas;
