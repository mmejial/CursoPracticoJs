/* (p *(100 -d)))/100 */
/* const precio =120;
const descuento =18; */
const cupones =[
    'cupon1',
    'cupon2',
    'cupon3'
    
];

const  totalaPagar=()=>{
    const precio = document.getElementById('price');
    const p = parseInt(precio.value);
    const descuento = document.getElementById('descuento');    
    const cupon = descuento.value;
    let des;
    switch(cupon){
        case 'cupon1':
            des =15;
            break;
        case 'cupon2':
            des =30;
            break;
        case 'cupon3':
            des=45;
            break
        default:
            des =0;
            break
    }   
    const formula = (p*(100-des))/100
    const parrafo = document.getElementById('total');
    parrafo.innerHTML= `el Resultado es ${formula}`
}
