import { API_URL } from '../url' 

let token = sessionStorage.getItem('token');

let requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
    "Authorization": 'Bearer ' + token
    }
};

export default async function obtenerDetalles(id){
    return await fetch(API_URL + "/Beca/" + id, requestOptions)
    .then(response => response.json())
};