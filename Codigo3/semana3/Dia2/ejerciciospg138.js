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
//             console.log("opcion incorrecta");
//             cont--
//             break;
//     }
// }
// var preciofinal= precio + precio*0.05
// console.log(preciofinal);

// var N=+prompt("ingrese cuantos numeros desea ingresar")

// for (var cont = 0;cont<N;cont++)

// 8
console.log("ejercicio 8");
var N=+prompt("ingrese el numero de compras a realizar");
var may200 = 0;
var may100 = 0;
var men100 = 0;
var dscto = 0;
var precio = 0;
for(var cont=0 ; cont<N ; cont++){
    precio=+prompt("ingrese el precio de su compra")
        if (precio>=200){
            dscto = precio*0.15;
            may200 = may200 + precio-dscto;
            console.log(`el precio de su compra es ${precio-dscto}`);
            console.log(`el descuento sera de ${dscto} soles`);
        }
        if (precio>=100 && precio<200){
            dscto = precio*0.12;
            may100 = may100 + precio-dscto;
            console.log(`el precio de su compra es ${precio-dscto}`);
            console.log(`el descuento sera de ${dscto} soles`);
        }
        if (precio<100 && precio>0){
            dscto = precio*0.10;
            men100 = men100 + precio-dscto;
            console.log(`el precio de su compra es ${precio-dscto}`);
            console.log(`el descuento sera de ${dscto} soles`);
        }
        if (precio<0){
            alert(`monto ingresado no valido`)
            cont--
        }
    }
var preciofinal=men100+may100+may200;
console.log(`el costo final es ${preciofinal} soles`);

// 9
console.log("ejercicio 9");
