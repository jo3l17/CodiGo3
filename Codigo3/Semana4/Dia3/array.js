var arreglo1 = new Array();
var arreglo2 = [21,3,4,4,5,5,3];
//ordenar un arreglo numerico
// console.log(arreglo2.sort(function(a,b){return a > b ? 1 : -1}));

//propiedades
document.write(`<p>Tamaño de arreglo2 ${arreglo2.length}</p>`);
document.write(`<p>Insertar un elemento al final ${arreglo2.push(80)}</p>`);
document.write(`<p>Eliminar y obtener el ultimo elemento ${arreglo2.pop()}</p>`);
document.write(`<p>slice(inicio, final) => devuelve un arreglo considerando 
                las posicionesinicio y fin ${arreglo2.slice(3,6)}</p>`);
console.log(arreglo2);
                document.write(`<p>splice => cambia el arreglo original y el 
                comportamiento es similar a la funcion slice ${arreglo2.splice(3,2)}</p>`);
console.log(arreglo2);
document.write(`<p>IndexOf => retorna la primera posicion de un elemento buscado ${arreglo2.indexOf(5)}</p>`);
document.write(`<p>Sort => ordena los elementos de un arreglo ${arreglo2.sort()}</p>`);
console.log(arreglo2);


