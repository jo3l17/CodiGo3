'use strict';
// JavaScript va a ser estricot al momento de
// repetar los ambitos de las variables, los puntos y comas,
// La transformacion automatica de los tipos de datos

// VARIABLE GLOBAL => Se puede usar en todo el documento
// se puede usar en todas las funciones
var a = 9;
let b = 10;
console.log(`a => ${a}`);
console.log(`b => ${b}`);
// Funcion que no recibe parametrosp ni retorna valor
// Declarando a la funcion
// var => sirve para crear una variable local
// let solo permite crear una variable local siempre y cuando este dentro de {}
function miFuncion(){
    var a = 10;
    let b = 20;
    console.log("Esta es una funcion");
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
}

// Llamando o invocando a la funcion
miFuncion();

console.log(`a => ${a}`);
console.log(`b => ${b}`);

var y = 8;
var m = 7;
const PI = 3.1416
console.log(PI);
if(y == 8){
    
}


