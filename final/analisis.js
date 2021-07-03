const salariosMex = mexico.map(
    function (persona){
        return persona.salary
    }
);

const salariosOrdenadosMex = salariosMex.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB
    }
);

function esPar(numero){
    return (numero %2 ===0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  


function medianaSalarios(lista){
    const mit = parseInt(lista.length/2)

    if(esPar(lista.lenght)){
        const Mitad1 =lista[mit-1];
        const Mitad2 = lista[mit]
        const mediana =calcularMediaAritmetica([Mitad1], [Mitad2])
        return mediana
    }else{
        const Mitad = lista[mit];
        return Mitad;
    }
}
const medianaGeneral =medianaSalarios(salariosOrdenadosMex);
//media top 10 %
const spliceStart= ((salariosOrdenadosMex.length *90)/100);
const spliceCount= salariosOrdenadosMex.length-spliceStart;

const salariosTop10 = salariosOrdenadosMex.splice(
    spliceStart,
    spliceCount,
);
const medianatop =medianaSalarios(salariosTop10);


console.log(medianaGeneral, medianatop);
