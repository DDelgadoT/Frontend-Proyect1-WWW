import { API_URL } from '../url' 

let token = sessionStorage.getItem('token');

let requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
    }
};

export async function obtenerBecas(){
    return await fetch(API_URL + "/Beca/all", requestOptions)
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasNacionales(){
    return await fetch(API_URL + "/Beca/categoria/Nacional", requestOptions)
    .then(response => response.json())
    .then(data => data)
};

export async function obtenerBecasInternacionales(){
    return await fetch(API_URL + "/Beca/categoria/Internacional", requestOptions)
    .then(response => response.json())
    .then(data => data)
};