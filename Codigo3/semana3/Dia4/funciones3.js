// Funciones que recibne parametros y retornan valores
function multiplicar(...numeros) {
    var resultado = 1;
    for(var i = 0; i < numeros.length; i++){
    resultado=resultado*numeros[i]
    console.log(resultado);
    }
    console.log(`el resultado es ${resultado}`);
    return resultado;
}
// si deseamos guardar el valor de retorno, usemos variables
// var res1 = multiplicar(4,5,6,3);
// var res2 = multiplicar(4,5);
// si no deseamos guardar el valor de retorno
// usemos la llamada directa de la funcion
console.log(`res1 => ${multiplicar(4,5,6,3)}`);
console.log(`res2 => ${multiplicar(4,5)}`);


function sumar(a,b){
    return a+b;
}
// 3,6,7,9
console.log(`Resultado => ${sumar(sumar(3,6),sumar(7,9))}`);

// realizar una funcion que dados 2 parametros (a y b)
// calcule la multiplicacion de ambos sin usar el signo
// *, solo se pueden usar sumas  y restas
function multi(a,b){
    var c = 0;
    if(b<a){
        for(var i=0; i<b; i++){
        c=c+a;
    }
    if (a<b){
        for(var i=0; i<a; i++){
        c=c+b; 
    }
}
return c;
}
console.log(`resultado => ${multi(3,4)}`);

// Realizar una funcion que dados el dividendo y el divisor
// Calcule la division entera + el residuo(si tuviera)
// sin usar el signo/ ni % ni mod ni nada
// la funcion debe retornar el cociente y el residuo

function div(a,b) {
    var cont = 0;
    for(a ; a >= b; a-b){
        a=a-b;
        cont++;
    }
    return [cont,a];
}
console.log(div(20,3));
