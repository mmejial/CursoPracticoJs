const Nombre = 'Marco Antonio';
const Apellido = 'Mejia Lopez';
let usrName = 'MarcoMejiaL';
let edad = 31;
const Email = 'marcomejia159010@gmail.com';
let mayorEdad = true;
let dineroAhorrado = 200;
let deudas = 8000;

/* -------------------------------------------------------- */
console.log(`tu Nombre es ${Nombre} ${Apellido}`);

console.log(`Tu deuda menos lo ahorrado es de ${dineroAhorrado - deudas}`);
/* ----------------------- */
const Nombrefuncion = (nombre, apellido, edad) =>{
    console.log(`mi nombre completo es ${nombre} ${apellido} y mi edad es de ${edad} `);
}

Nombrefuncion(Nombre, Apellido, edad);
/* ------------------------------------------- */

const tipoDeSuscripcion = 'Expert+';

if(tipoDeSuscripcion == 'Basic'){
    console.log('es basic');
}
else if (tipoDeSuscripcion == 'Expert'){
console.log('tu suscirpcion es Expert');
}
else if (tipoDeSuscripcion == 'Expert+'){
    console.log('tu suscripcion es Expert + y la compartes con un amigo');
}
else{
    console.log('creo que no tiene suscripcion');
}
/* ----------------------------------------------- */
const tipoDeSuscripcion = null;
if(tipoDeSuscripcion == 'Basic'){
    console.log('es basic');
}
if(tipoDeSuscripcion == null){
    console.log('no tienes suscripcion');
}


/* ----------------------- */
let a =1;
while(a <= 5 ){
    console.log(a);
    a++;
}

let b =10;
while (b >=2){
    console.log(b);
    b--
}

/* ------------------ */
let respuest = 4;
console.log('Cuanto es 2 + 2');
if(respuest ==4){
    console.log('respuesta correta es 4');
}
else{
    console.log('respuestas incorrecta '+respuest);
}

/* -------------------- */
let cadena = [1,3,5,7];

const primerElemento =(cadena)=>{
   return console.log(cadena[0]);
} 
primerElemento(cadena)

/* ------------------------ */
let cadena = [8,3,5,7];

const primerElemento =(cadena)=>{
   for(let a =0; a <=cadena.length; a++){
     console.log(cadena[a]);
   }
   
} 
primerElemento(cadena)