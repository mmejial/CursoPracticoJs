console.group("Cuadrado")
//codigo del cuadrado
const ladoCuadrado =  5;
console.log(`los lados del Cuadrado miden: ${ladoCuadrado}`);

const perimetroCuadrado = ladoCuadrado*4;

console.log(`El Perimetro del Cuadrado es: ${perimetroCuadrado}cm`);

const areadCuadrado = ladoCuadrado + ladoCuadrado;

console.log(`El Area del Cuadrado mide: ${areadCuadrado}cm`);
console.groupEnd();
//codigo del triangulo
console.group('triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`los lados de mi Triangulo miden ${ladoTriangulo1} y la base es de ${baseTriangulo}`);
console.log(`la Algura es de ${alturaTriangulo}cm`);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`el perimetro del triangulo es ${perimetroTriangulo}`);
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`el Area del triangulo es ${areaTriangulo}`);
console.groupEnd();
/* inicio del criculo */
console.group('circulo');
const radio =4;
const diametroCirculo= radio *2;
const PI = Math.PI;

const perimetroCirculo =diametroCirculo * PI;
const areaCirculo = Math.pow(radio, 2) * PI;

console.log(`el perimetro del circulo es ${perimetroCirculo}`);
console.log(`el area del circulo es ${areaCirculo}`);


console.groupEnd();