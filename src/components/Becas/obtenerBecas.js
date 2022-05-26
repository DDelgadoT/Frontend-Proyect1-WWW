export async function obtenerBecas(){
    return await fetch("http://127.0.0.1:8080/Beca/all")
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasNacionales(){
    return await fetch("http://127.0.0.1:8080/Beca/categoria/nacionales")
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasInternacionales(){
    return await fetch("http://127.0.0.1:8080/Beca/categoria/internacionales")
    .then(response => response.json())
    .then(data => data)
};