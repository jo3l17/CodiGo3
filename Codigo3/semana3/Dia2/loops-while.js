var base = 6;
var limite = 10;
var cont = 0;
while (cont<=10) {
    console.log(`${base} X ${(cont)} = ${base*(cont)}`);
    

    cont++;
}

// Hacer un programa que reciba infinitos numeros por parte del usuario
// el programa debe terminar unicamente si el usuario ingresa
// un numero negativo y mostrar el promedio de todos los numero ingresados

var numero=0;
var cont=0;
var suma=0;
while (numero>=0){
    numero=+prompt("ingrese numero");
    if(numero>=0){
        cont++;
        suma=suma+numero;
    }
}
console.log(`valores ingresados = ${cont}`);
console.log(`suma de los valores = ${suma}`);
console.log(`el promedio es ${suma/cont}`);

// sin el if
// var numero=0;
// var cont=0;
// var suma=0;
// while (numero>=0){
//     numero=+prompt("ingrese numero");
//     cont++;
//     suma=suma+numero;
// }
// cont--;
// suma = suma - numero;
// console.log(`valores ingresados = ${cont}`);
// console.log(`suma de los valores = ${suma}`);
// console.log(`el promedio es ${suma/cont}`);
