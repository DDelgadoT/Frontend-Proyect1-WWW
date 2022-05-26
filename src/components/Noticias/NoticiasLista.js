import React, { useEffect, useState } from 'react';
import obtenerNoticias from './obtenerNoticias';
import Noticias from './Noticias';

import './NoticiasLista.css';

function NoticiasLista(){

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        obtenerNoticias().then(setNoticias);
    }, []);

    let listaNoticicas = noticias.slice(0,10).map(element => {
        return (<Noticias key="element.title" title={element.title} abstract={element.abstract} url={element.url} src={element.multimedia[0].url} />);
    });

    return(
        <div className="responsive">
            {listaNoticicas}
        </div>
    );
}

export default NoticiasLista;