// 1
console.log("ejercicio 1");
var edad = 18;
if (edad > 17) {
    console.log("puedes votar");
} else {
    console.log("no puedes votar");
}
// 2
console.log("ejercicio 2");
var horas = 45;
var sueldoxhora = 30.00;
var excedente = 0;
var sueldototal = horas * sueldoxhora
if (horas > 39) {
    excedente = horas - 40;
    sueldototal = horas * sueldoxhora + excedente * sueldoxhora;
}
console.log("tu sueldo es " + sueldototal);
// 3
console.log("ejercicio 3");
var Presupuesto = 50;
if(Presupuesto < 11){
    console.log("compra tarjeta")
    }
if (Presupuesto > 10 && Presupuesto < 101){
    console.log("compra chocolates")
    }
if (Presupuesto > 100 && Presupuesto < 251){
    console.log("compra flores")
    }
if (Presupuesto > 251){
    console.log("compra anillo")
}
// 4
console.log("ejercicio 4");
var horas = 15;
if (horas <= 2){
console.log(horas*5.00)
}
if (horas > 2 && horas <= 5){
    console.log(horas*4.00)
}
if (horas > 5 && horas <= 10){
    console.log(horas*3.00)
}
if (horas > 10){
    console.log(horas*2.00)
}
// 5
console.log("ejercicio 5");
var edad1 = 18, edad2 = 20, edad3 = 30;
var nombre1 = "eddy", nombre2 = "juan", nombre3 = "holamundo";
if (edad1<edad2 && edad1<edad3){
    console.log("el de menor edad es "+nombre1+" y tiene "+edad1+" anios");
}
if (edad2<edad1 && edad2<edad3){
    console.log("el de menor edad es "+nombre2+" y tiene "+edad2+" anios");
}
if (edad3<edad2 && edad3<edad1){
    console.log("el de menor edad es "+nombre3+" y tiene "+edad3+" anios");
}
// 6
console.log("ejercicio 6");
var precio = 250;
console.log("el precio de tu producto es "+precio);

total= 0;
if (precio >= 200){
    total=precio*0.85;
}
if (precio > 100 && precio < 200){
    total=precio*0.88;
}
if (precio < 100){
    total=precio*0.90;
}
console.log("el precio final es "+total);
// 7
console.log("ejercicio 7");
var promedio = 9;
var edad = 18;
if (promedio >= 9 && edad > 18){
    console.log("tu beca es de $2000");
}
if (promedio >= 7.5 && promedio < 9 && edad > 18){
    console.log("tu beca es de $1000");
}
if (promedio >= 6 && promedio < 7.5  && edad > 18){
    console.log("tu beca es de $500");
}

if (promedio >= 9 && edad <= 18){
    console.log("tu beca es de $3000");
}
if (promedio == 8 && edad <= 18){
    console.log("tu beca es de $2000");
}
if (promedio >= 6 && promedio < 8  && edad <= 18){
    console.log("tu beca es de $100");
}

// 16
console.log("ejercicio 16");
var puntos = 150;
if(puntos >= 0 && puntos < 101){
    console.log("1 salario")
    }
if (puntos > 100 && puntos < 151){
    console.log("2 salarios minimos")
    }
if (puntos > 150){
    console.log("3 salarios minimos")
    }
// 17
var Presupuesto = 30000;
if(Presupuesto < 10000){
    console.log("comprar 1 par de zapatos, 2 camisas y 2 pantalones")
    }
if (Presupuesto >= 10000 && Presupuesto < 20000){
    console.log("comprar 2 pares de zapatos, 3 camisas y 3 pantalones")
    }
if (Presupuesto >= 20000  && Presupuesto < 50000){
    console.log("comprar una grabadora, 3 pares de zapatos, 5 camisas y 5 pantalones")
    }
if (Presupuesto >= 50000){
    console.log("comprar una television, un modular, 3 pares de zapatos, 5 camisas y 5 pantalones")
}
// 18
var sueldo = 1000;
var antiguedad = 3;
if(sueldo < 2000 || antiguedad > 4){
    console.log("el bono sera "+ sueldo*0.25);
}else{
    console.log("el bono sera "+ sueldo*0.20);
}