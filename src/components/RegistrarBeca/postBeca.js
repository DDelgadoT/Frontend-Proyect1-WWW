import { API_URL } from '../url';

let token = sessionStorage.getItem('token');

export default function PostBeca(cuerpo){
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + token
        },
        body: JSON.stringify(cuerpo)
    };

    try {
        fetch(API_URL + "/Beca", requestOptions)
        .then(response => {
            alert("Registro exitoso");
            window.location.replace("/populares")
        });       
    }catch(e){
        console.log(e);
    }
}