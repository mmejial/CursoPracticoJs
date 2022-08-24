/* const title = document.querySelector('.titulo');
const inputs = document.querySelector('.input')
const body = document.querySelector('body')
const parrafo2 = document.querySelector('#parrafo2')
console.log(body);
console.log(inputs); */
/* inputs.value ="123" */

/* const titulo2 = document.createElement('h2')

titulo2.innerHTML =' titulo 2'
console.log(titulo2);

body.insertBefore(titulo2, inputs) */

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btnCaluculo = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const formularioSuma = document.querySelector('#formulario')

formularioSuma.addEventListener('submit', calculo);

 function calculo(e){
    e.preventDefault()
    const suma = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerHTML=suma
} 
