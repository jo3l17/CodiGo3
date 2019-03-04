// Una estructura repetitiva es una estructura
// que repetira n veces una porcion de codigo
// for - while - do while - "until"
var cont = 34;
// la variable 'cont' se reinicia en el ciclo for
// for(definicion; limite; incremento)
for(cont = 0; cont < 9; cont++){
    console.log(`Mensajito ${cont}`);
}


// programa para hacer una tabla de multiplicar
// EL USUARIO ingresa el numero
// EL USUARIO ingresa el numero limite en el que acaba la tabla
// var numero  = parseInt(prompt("ingrese el numero"));
// var numerolimite = parseInt(prompt("ingrese el numero limite"));

// var cont;
// for(cont = 0; cont<=numerolimite; cont++){
//     console.log(`${numero} X ${cont}=${numero*cont}`);
// }



// programa para calcular el promedio de N notas
// es usuario ingresa "n"
// el usuario ingresa las "n" de notas
// crear variable notas fuera del for ayuda a que la memoria ram no se sobrecarge
// ya que solo cambia la variable de afuera

// var numerodenotas = parseInt(prompt("ingrese el numero de notas")),
//     notas = 0;
// var cont;
// for (cont = 0; cont<numerodenotas; cont++){
//     ingreso = parseInt(prompt("ingrese la nota"))
//     notas = notas + ingreso
// }
// console.log(`el promedio de las notas es igual a ${notas/numerodenotas}`);

var N = parseInt(prompt("numero de ventas")),
    cont,
    A=0,
    B=0,
    C=0,
    T1=0,
    T2=0,
    T3=0,TT=0,V=0;
for (cont=0; cont<N; cont++){
    V = parseInt(prompt("monto de la venta"));
    switch (true) {
        case V>1000:
            A=A+1;
            T1=T1+V;
            break;
        case V>500 && V<=1000:
            B=B+1;
            T2=T2+V;
            break;
        case V<=500:
            C=C+1;
            T3=T3+V;
            break;
        default:
            break;
    }
    TT=TT+V;
}
console.log(`Las ventas mayores a 1000 fueron ${A} y el total de ventas es:${T1}`);
console.log(`Las ventas mayores a 500 y menores iguales a 1000 fueron ${B} y el total de ventas es:${T2}`);
console.log(`Las ventas menores a 500 fueron ${C} y el total de ventas es:${T3}`);
console.log(`el total de ventas es ${TT}`);
