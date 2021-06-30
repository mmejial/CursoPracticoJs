console.group("Cuadrado")
//codigo del cuadrado
 /* const ladoCuadrado =  5;  */


function  perimetroCuadrado(lado){
    return lado *4
} 
perimetroCuadrado();
/* console.log(`El Perimetro del Cuadrado es: ${perimetroCuadrado}cm`); */

function areadCuadrado(lado){
return lado * lado
}
console.groupEnd();





//codigo del triangulo
console.group('triangulo')

/* console.log(`los lados de mi Triangulo miden ${ladoTriangulo1} y la base es de ${baseTriangulo}`);
console.log(`la Algura es de ${alturaTriangulo}cm`); */
function perimetroTriangulo(lado1,lado2, base){
    return lado1 + lado2+ base;

} 
/* console.log(`el perimetro del triangulo es ${perimetroTriangulo}`); */
const areaTriangulo = (base,altura)=>{
    console.log((base * altura)/2);
} 
/* console.log(`el Area del triangulo es ${areaTriangulo}`); */

console.groupEnd();
/* inicio del criculo */
console.group('circulo');

const PI = Math.PI;
const diametroCirculo= (radio)=>    radio * 2;
const perimetroCirculo =(radio)=>{
    const diametro = diametroCirculo(radio)
  return diametro * PI;
} 
const areaCirculo =(radio)=>{
    return Math.pow(radio, 2) * PI;
} 
console.groupEnd();

/* area de calculos con botones */
const calcularPerimetroCuadrado=()=>{
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);


alert(`el perimetro de mi Cuadrado es ${perimetro}`)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areaCuadrado= areadCuadrado(value)
    alert(`el area de mi cuadrado es ${areaCuadrado}`)
    console.log(typeof(value));
}

/* funciones del triangulo */
const calcularPerimetroTriangulo=()=>{
    const lado1 = document.getElementById('InputTriangulo1');
    const lado2 = document.getElementById('InputTriangulo2');
    const base = document.getElementById('InputBaseTriangulo');
    const vale1 =lado1.value;
    const vale2= lado2.value;
    const valebase= base.value;
    
    if (vale1 === vale2){
        let cuadrado = Math.pow(Number(valebase),2) - Math.pow(Number(vale1),2);
        let altura = Math.sqrt(cuadrado); 
        console.log(Math.sqrt());
        alert(`la altura es ${altura}`)
    }
    else{
        alert('no es isoceles')
    }

    
}