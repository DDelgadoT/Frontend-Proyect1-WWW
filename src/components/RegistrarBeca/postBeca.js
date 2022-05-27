import { API_URL } from '../url';

let token = sessionStorage.getItem('token');

export default function PostBeca(cuerpo){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/Beca", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        alert("Registro exitoso");
        window.location.replace("/populares")
    }catch(e){
        console.log(e);
    }
}