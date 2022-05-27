import { API_URL } from '../url' 

let requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM2ODM5ODMsImlhdCI6MTY1MzU5NzU4MywiaXNzIjoiRUxBRE1JTiJ9.dyq7U6EdKNGiRLLRludrxM9rbUbxBwDw_JT3d5osJfs'
    }
};

export default async function obtenerDetalles(id){
    return await fetch(API_URL + "/Beca/" + id, requestOptions)
    .then(response => response.json())
};