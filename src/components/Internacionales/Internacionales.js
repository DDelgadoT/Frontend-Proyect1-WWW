import React, { useEffect, useState } from 'react';
import './Internacionales.css';
import { Container, Row } from 'react-bootstrap';
import { obtenerBecasInternacionales } from "../Becas/obtenerBecas";
import Becas from '../Becas/Becas';

function Internacionales() {

  const [becas, setBecas] = useState([]);

  useEffect(() => {
    obtenerBecasInternacionales().then(setBecas);
  }, []);

  let listaBecas = becas.map(element => {
      return (<Becas key="element.id" 
      nombre={element.nombre} 
      categoria={element.categoria} 
      porcentaje={element.porcentajeF}
      pais={element.pais}
      universidad={element.universidad}
      fecha={element.updated_at}
      id={element.id}
      />);
  });

  return (
    <div className="App">
        <Container border="dark" className="border border-dark div">
            <h1>Becas internacionales</h1>
            <Row xs={1} md={2} className="g-4">
                {listaBecas}
            </Row>
        </Container>
    </div>
  );
}

export default Internacionales;
