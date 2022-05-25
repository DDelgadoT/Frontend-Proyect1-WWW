import React from "react";

import './Noticias.css';

function obtenerNoticias(){
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5L6Nk6ZCiQUPVNYTR1M69PnPlqUam93j")
    .then(response => response.json())
    .then(data => console.log(data.results[10]));
}

function Noticias(props){

    obtenerNoticias();

    return(
        <div>

        </div>
    );
}

export default Noticias;