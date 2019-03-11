'use strict';
// Cuando se incluye el () al final de la funcion,
// el valor que toma la variable 'anonima' es el resutado
// de la ejecucion de la funcion
var anonima = function(a=90,b=80){
    return a+b;
}();
// Cuando no se incluye el () al final de la funcion,
// la funcion 'anonima2' podra invocarse N veces haciendo
// referencia a la funcion

var anonima2 = function(a,b){
    return a+b;
}

console.log(anonima);
console.log(anonima(4,5));
console.log(anonima2(57,5));

