// la estructura switch evalua un conjunto de valores
// posible que una variable puede tomar.
// break es el complemento de cada case para que switch termine

var edad = 21;
switch (edad) {
    case 20:
        console.log("Vale 20");
        break;
    case 21:
        console.log("Vale 21");
        break;
    case 22:
        console.log("Vale 22");
        break;
    default:
    console.log("No existen datos - -ERROR");
}
console.log("Fin del Programa");

// para hacer comparativas o casos de if se usa true
var precio = 6000;
switch(true){
    case precio >4000 && precio < 10000:
        console.log("precio >4000 && precio < 10000");
        break;
    case precio >=10000 && precio < 20000:
        console.log("precio >=10000 && precio < 20000");
        break;
    default:
    console.log("no esta en el rango");
}

var nota = 20;
switch(true){
    case nota ==19 || nota ==20 :
    console.log("Sobresaliente");
    break;
    case nota ==17 || nota ==18 :
    console.log("Muy bueno");
    break;
    case nota >=14 && nota <=16 :
    console.log("Bueno");
    break;
    case nota >=11 && nota <=13 :
    console.log("Suficiente");
    break;
    case nota <=10:
    console.log("Insuficiente");
    break;
    default:
    console.log("ERROR");
}

// prompt => permite al usuario ingresar datos y capturarlos en el programa

var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
// conversion directa del ingreso del usuario a tipo de dato entero
var nroHijos = parseInt(prompt("ingrese el numero de hijos"));
// parseInt => Convierte un string a entero
var edadNumber = parseInt(edad);
// El signo + como prefijo, convierte un string a entero
var edadNumber2 = +edad;

console.log(`${nombre} - ${edad} años`);
console.log(edad);
console.log(edadNumber);
console.log(nroHijos);
console.log(edadNumber2);
