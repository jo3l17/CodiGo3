// el arreglo puede tener varios elementos dentro
var arreglo = ["3","holi",true,8,-90];

arreglo[9] = 45;
var x = arreglo[1];
// var arreglo2 = new Array();
// var arreglo2 = [];
// var arreglo2 = new Array(7);
console.log(arreglo[3]+arreglo[2]);
console.log(x);

var arreglo3 = [5,false,[89,"UNSTRING"]]
console.log(arreglo3[2][1]);


// propiedades de los arreglos
// length => retorna la cantidad de elementos del arreglo
console.log(arreglo3.length);
// push => agrega al final del arreglo, un elemento dado;
arreglo3.push(90)
console.log(arreglo3);
// pop => Extrae el ultimo elemnto del arreglo
var ultimoElemento = arreglo3.pop();
console.log(ultimoElemento);
console.log(arreglo3);
console.log(`Extrayendo => ${arreglo3.pop()}`);





