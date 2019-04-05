'use strict';
function sumar(a,b) {
    return a+b;
}
let sumar2 =function(a,b){
    return a+b;
}

// transformando una funcion tradicional a una
// funcion de flecha
let sumarFlecha = (a,b)=>{
    return a+b;
};
console.log(sumarFlecha(7,8));
// si la funcion recibe un solo parametro se puede omitir los parentesis
let cuadrado = nro=>{return nro*nro};
console.log(cuadrado(4));

// si el desarrollo de la funcion tiene una sola
// linea de retorno se pueden omitir las llaves y la palabra return
let cubo = nro => nro*nro*nro
console.log(cubo(6));


