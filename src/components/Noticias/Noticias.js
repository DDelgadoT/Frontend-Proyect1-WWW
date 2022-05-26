import React from 'react';
import Card from 'react-bootstrap/Card';

import './Noticias.css';

function Noticias(props){

    return(
        <Card border="dark" className="space">
            <Card.Img variant="top" className="zoom" src={props.src} />
            <Card.Body>
                <Card.Title><a href={props.url}>{props.title}</a></Card.Title>
                <Card.Text>
                    {props.abstract}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Noticias;