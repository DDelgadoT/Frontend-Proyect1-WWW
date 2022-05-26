import { API_URL } from '../url';
import ModalConfirmacion from './ModalConfirmacion'

export default function PostBeca(cuerpo){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTM2ODM5ODMsImlhdCI6MTY1MzU5NzU4MywiaXNzIjoiRUxBRE1JTiJ9.dyq7U6EdKNGiRLLRludrxM9rbUbxBwDw_JT3d5osJfs'
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/Beca", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        alert("Registro exitoso");
    }catch(e){
        console.log(e);
    }
}