// 1
// var repetir=true
// do{
//     var primernumero = +prompt("ingrese el primer numero")
//     var segundonumero = +prompt("ingrese el segundo numero")
//     if (primernumero>segundonumero){
//         console.log(`la suma es ${primernumero} + ${segundonumero} = ${primernumero+segundonumero}`);
//         console.log(`la suma es ${primernumero} - ${segundonumero} = ${primernumero-segundonumero}`);
//         repetir=false
//     }else{
//         if (primernumero<segundonumero){
//             console.log(`la multiplicacion es ${primernumero} X ${segundonumero} = ${primernumero*segundonumero}`);
//             console.log(`la division es ${primernumero} / ${segundonumero} = ${primernumero/segundonumero}`);
//         repetir=false
//         }
//         else{
//             alert(`los numero son iguales, ingrese otros`);
//         }
//     }
// }while(repetir)
// 2

// 7
var repeat=true;
var fijol=0.2;
var fijon=0.5;
var celular=1;
var tiempo=0;
var costo;
do {
    var number = +prompt(`ingrese el numero a comunicar si es fijo no ingrese el 0`)
    switch (true) {
        case number==105 || number==103 || number==106 || number==123:
            alert(`realizando llamada de emergencia, sin costo`)
            repeat=false;
            break;
        case number>=900000000 && number < 1000000000:
            while (repeat) {
                tiempo=+prompt(`ingrese el tiempo a comunicarse minutos`)
                if(tiempo>0){
                    costo=celular*tiempo;
                    console.log(`el costo de su llamada es ${costo}`);
                    repeat=false;
                }else{
                    alert(`tiempo incorrecto`)
                }
            }
            break;
        case number>=54000000 && number < 55000000:
        while (repeat) {
            tiempo=+prompt(`ingrese el tiempo a comunicarse minutos`)
            if(tiempo>0){
                costo=fijol*tiempo;
                console.log(`el costo de su llamada es ${costo}`);
                repeat=false;
            }else{
                alert(`tiempo incorrecto`)
            }
        }
            break;
        case number>=51000000 && number < 52000000:
        while (repeat) {
            tiempo=+prompt(`ingrese el tiempo a comunicarse minutos`)
            if(tiempo>0){
                costo=fijon*tiempo;
                console.log(`el costo de su llamada es ${costo}`);
                repeat=false;
            }else{
                alert(`tiempo incorrecto`)
            }
        }
        default:
            alert(`numero incorrecto`)
            repeat=true;
            break;
    }
    
} while (repeat);


// 8
// do{
//     var validacion = true;
//     var numero=+prompt("ingrese el numero al que desea enviar el mensaje");
    
//     if (numero<1000000000 && numero>=100000000) {
//         var mensaje=prompt("ingrese el mensaje");
//         alert(`mensaje enviado al numero ${numero}`);
//         validacion=false
//     } else {
//         alert(`error ingrese nuevamente el numero`);
//     }
// }while (validacion);
