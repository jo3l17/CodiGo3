
// var numero = -9000;
// cont = 0;
// suma = 0;
// do {
    
//     numero=+prompt("ingresa un numero")
//     if(numero>=0){
//         suma = suma + numero;
//         cont++
//     }
// } while (numero >= 0);

// console.log(`valores ingresados = ${cont}`);
// console.log(`suma de los valores = ${suma}`);
// console.log(`el promedio es ${suma/cont}`);

// hacer un programa para que el usuario ingrese una contraseña
// El usuario tiene 3 intentos si falla los 3
// el programa debe culminar

var pwd;
var cont = 0;
do {
    pwd= prompt("ingrese contraseña")
    cont++;
    if(pwd != "1234"){
        alert(`le quedan ${3-cont} intentos`);
    }else{
        alert(`bienvenido`)
        console.log("correcto")
        cont=3;
    }
} while (cont<3);

