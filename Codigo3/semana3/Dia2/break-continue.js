// break->interrumpe el bloque en el que se encuentra dicha instruccion
// no importa cuantas iteraciones resten por dejecutarse, break
// termina u omite todas ellas
// continue-> interrrumpe el ciclo en el que se encuentra, omite las 
// instrucciones de la iteracion actual y pasa a la siguiente iteracion
var rpta =""
while(true){
    rpta = prompt(  `/////MENU/////
                    1.-Fecha Actual
                    2.-Imprimir Saludo
                    3.-Terminar el programa
                    /////FIN/////
                    Ingrese la opcion`);
    if (rpta == 1){
        alert(`La fecha actual es ${NewDate}`)
    }
    if (rpta == 3){
        break;
    }
}

// for(var i = 0;i < 10 ; i++){
//     console.log(`el valor de i es => ${i}`);
//     if(i == 5){
//         break;
//     }
// }

for(var i = 0;i < 10 ; i++){
    if(i == 5){
        continue;
    }
    console.log(`el valor de i es => ${i}`);
}

var flag = false;
for(var i = 0;i < 10 ; i++){
    
    console.log(`i => ${1}`);
    
    for(var j = 0; j<10; j++){

        if(j % 2 != 0){
            flag =true;
            break;
        }
        console.log(`j => ${j}`);
    }
    if (flag) break;
}

// OPERADOR TERNARIO => resume en una linea la ejecucion
// de un if y un else que tengan una sola sentencia
// ?:;
// EJEMPLO

var x = 8;

// if (x == 8){
//     console.log("x es igual a 8");
// }else{
//     console.log("x no es igual a 8");
// }

x == 8 ? console.log("x = 8") : console.log("x != 8");

