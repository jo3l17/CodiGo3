// 6
// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.

console.log("ejercicio 6");

var nombres = []
var edades = []

for (var i = 0; i < 4; i++) {
    var N = prompt("ingrese el nombre del alumno")
    nombres.push(N)
    var E = +prompt("ingrese la edad")
    edades.push(E)
}

console.log(nombres);
console.log(edades);

var max = Math.max(...edades);
console.log(max);
console.log(nombres[edades.indexOf(max)]);

