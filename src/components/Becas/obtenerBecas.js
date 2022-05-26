async function obtenerBecas(){
    return await fetch("http://127.0.0.1:8080/Beca/all")
    .then(response => response.json())
    .then(data => data.results)
};

export default obtenerBecas;