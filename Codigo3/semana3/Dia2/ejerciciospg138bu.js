// 1
// console.log("ejercicio 1");
// var sueldo = 1500;
// var cont = 1;
// console.log(`su sueldo en el primer año es de ${sueldo}`);
// while(cont<6){
//     cont++;
//     sueldo = sueldo + sueldo*0.10;
//     console.log(`sueldo recibido en el año ${cont} ${sueldo}`);
// }


// 2
// console.log("ejercicio 2");
// var N=+prompt("ingrese numero de hamburguesas");
// var cont = 0;
// var precio= 0;
// var A=20;
// var B=25;
// var C=28;
// while(cont<N){
//     cont++
//     var opcion = prompt(    `Elija su opcion de Hamburguesa le quedan ${N+1-cont}
//                             S-Simple D-Doble T-Triple`)
//     switch (opcion) {
//         case "S":
//             precio=precio+A
//             break;
//         case "D":
//             precio=precio+B
//             break;
//         case "T":
//             precio=precio+C
//             break;
//         default:
//             alert("opcion incorrecta");
//             cont--
//             break;
//     }
// }
// var preciofinal= precio + precio*0.05
// console.log(preciofinal);

// 3
// console.log("ejercicio 3");
// var N=+prompt("ingrese cuantos numeros desea ingresar")
// var cont1=0;
// var cont2=0;
// var cont3=0;
// for (var cont = 0;cont<N;cont++){
//     var numero = +prompt(`ingrese el numero le quedan ${N-cont} numeros`)
//     switch (true) {
//         case numero<0:
//             cont1++
//             break;
//         case numero==0:
//             cont2++
//             break;
//         case numero>0:
//             cont3++
//             break;
//         default:
//             alert(`incorrecto`)
//             cont--
//             break;
//     }
// }
// console.log(`hay ${cont1} numeros menores a 0`);
// console.log(`hay ${cont2} numeros iguales a 0`);
// console.log(`hay ${cont3} numeros mayores a 0`);

// 4
// console.log("ejercicio 4");
// var N=+prompt("ingrese cuantos focos desea ingresar")
// var cont1=0;
// var cont2=0;
// var cont3=0;
// for (var cont = 0;cont<N;cont++){
//     var foco = +prompt(`ingrese el color de foco (1-verde 2-blanco o 3-rojo) le quedan ${N-cont} focos`)
//     switch (foco) {
//         case 1:
//             cont1++
//             break;
//         case 2:
//             cont2++
//             break;
//         case 3:
//             cont3++
//             break;
//         default:
//             alert(`incorrecto`)
//             cont--
//             break;
//     }
// }
// console.log(`hay ${cont1} focos verdes`);
// console.log(`hay ${cont2} focos blancos`);
// console.log(`hay ${cont3} focos rojos`);

// 5
// console.log("ejercicio 5");
// var ahorroTotal = 1;
// var ahorrodiario = 3;
// var dia = 1;
// var aumento = 2;
// while (dia<=365) {
//     if (dia == 1){
//         alert(`el ahorro del dia ${dia} es ${aumento+1}`)
//         ahorroTotal=ahorroTotal*ahorrodiario;
//         dia++;
//         aumento=aumento*ahorrodiario;
//         alert(`el ahorro total es ${ahorroTotal}`)
//     }else{
//         alert(`el ahorro del dia ${dia} es ${aumento}`)
//         ahorroTotal=ahorroTotal*ahorrodiario;
//         dia++;
//         aumento=aumento*ahorrodiario;
//         alert(`el ahorro total es ${ahorroTotal}`)
//     }
// }
// 5
console.log("ejercicio 5");
var ahorroTotal = 3, dia = 1;
    while (dia < 365) {
        alert(`El ahorro del dia ${dia} es ${ahorroTotal}`);
        ahorroTotal = ahorroTotal * 3;
        dia++;
    }
alert(`El ahorro total es ${ahorroTotal}`);

// 6
console.log("ejercicio 6 a");
var sueldo = 1500;
var cont = 1;
console.log(`su sueldo en el primer año es de ${sueldo}`);
while(cont<6){
    cont++;
    sueldo = sueldo + sueldo*0.10;
    console.log(`sueldo recibido en el año ${cont} ${sueldo}`);
}

console.log("ejercicio 6 b");
var sueldo = 1500;
console.log(`su sueldo en el primer año es de ${sueldo}`);
for (var cont = 1; cont <=6; cont++) {
        sueldo = sueldo + sueldo*0.10;
        console.log(`sueldo recibido en el año ${cont} ${sueldo}`);
}

// 7
console.log("ejercicio 7 a");
var N=+prompt("ingrese numero de hamburguesas");
var cont = 0;
var precio= 0;
var A=20;
var B=25;
var C=28;
while(cont<N){
    cont++
    var opcion = prompt(    `Elija su opcion de Hamburguesa le quedan ${N+1-cont}
                            S-Simple D-Doble T-Triple`)
    switch (opcion) {
        case "S":
            precio=precio+A
            break;
        case "D":
            precio=precio+B
            break;
        case "T":
            precio=precio+C
            break;
        default:
            alert("opcion incorrecta");
            cont--
            break;
    }
}
var preciofinal= precio + precio*0.05
console.log(preciofinal);

console.log("ejercicio 7 b");
var N=+prompt("ingrese numero de hamburguesas");
var precio= 0;
var A=20;
var B=25;
var C=28;
for(var cont=0;cont<=N;cont++){
    var opcion = prompt(    `Elija su opcion de Hamburguesa le quedan ${N-cont}
                            S-Simple D-Doble T-Triple`)
    switch (opcion) {
        case "S":
            precio=precio+A
            break;
        case "D":
            precio=precio+B
            break;
        case "T":
            precio=precio+C
            break;
        default:
            alert("opcion incorrecta");
            cont--
            break;
    }
}
var preciofinal= precio + precio*0.05
console.log(preciofinal);

// 8
console.log("ejercicio 8");
