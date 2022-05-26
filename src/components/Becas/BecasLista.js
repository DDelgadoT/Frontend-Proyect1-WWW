import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import obtenerBecas from './obtenerBecas';
import Becas from './Becas';

import './BecasLista.css';

function BecasLista(){

    const [becas, setBecas] = useState([]);

    useEffect(() => {
        obtenerBecas().then(setBecas);
    }, []);

    console.log(becas);

    let listaBecas = becas.slice(0,2).map(element => {
        return (<Becas key="element.id" 
        title={element.nombre} 
        abstract={element.categoria} 
        url={element.porcentaje}
        src={element.pais} 
        />);
    });

    return(
        <div className="responsive">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: becas.length }).map((_, idx) => (
                    <Col>
                        <Card>
                            {listaBecas}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default BecasLista;