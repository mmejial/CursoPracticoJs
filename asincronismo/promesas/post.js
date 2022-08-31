import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI,data){
    const response = fetch(urlAPI,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return response
}


const data = {
    "title": "taquitos de pollo",
    "price": 12,
    "description": "taquitos al pollo",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`,data)
.then(response => response.json())
.then(data => console.log(data))