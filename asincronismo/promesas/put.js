import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function putData(apiUrl, id){
    const response = fetch(apiUrl,{
        method:'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return response
    
}
const id = 314;

const data ={
    "title":"taquitos de arroz",
    "description":"taco de papa"
}

putData(`${API}/products/${id}`,data)
.then(response => response.json())
.then(data => console.log(data))