import React, { useEffect, useState } from 'react';
import './Nacionales.css';
import { Container, Row } from 'react-bootstrap';
import { obtenerBecasNacionales } from "../Becas/obtenerBecas";
import Becas from '../Becas/Becas';
import Cabecera from '../Navbar/Navbar';

function Nacionales() {

  const [becas, setBecas] = useState([]);

  useEffect(() => {
    obtenerBecasNacionales().then(setBecas);
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
    <>  
      <Cabecera />
      <div className="App">
          <Container border="dark" className="border border-dark div">
              <h1>Becas nacionales</h1>
              <Row xs={1} md={2} className="g-4">
                  {listaBecas}
              </Row>
          </Container>
      </div>
    </>
  );
}

export default Nacionales;
