const title = document.querySelector('.titulo');
const inputs = document.querySelector('.input')
const body = document.querySelector('body')
const parrafo2 = document.querySelector('#parrafo2')
console.log(body);
console.log(inputs);
/* inputs.value ="123" */

const titulo2 = document.createElement('h2')

titulo2.innerHTML =' titulo 2'
console.log(titulo2);

body.insertBefore(titulo2, inputs)

