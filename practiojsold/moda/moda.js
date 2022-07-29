const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
const lista1count ={

}

lista1.map(
    function (elemento){
        if(lista1count[elemento]){
            lista1count[elemento] +=1
        }else{
            lista1count[elemento] = 1
        }
        
    }
);
//se envia como argumento el objeto que se quiere convertir en un array
const lista1array = Object.entries(lista1count).sort(
function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1]
}
);


const moda =lista1array[lista1array.length -1]
console.log(moda);