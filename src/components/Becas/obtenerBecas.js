import { API_URL } from '../url' 

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM2ODM5ODMsImlhdCI6MTY1MzU5NzU4MywiaXNzIjoiRUxBRE1JTiJ9.dyq7U6EdKNGiRLLRludrxM9rbUbxBwDw_JT3d5osJfs";

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