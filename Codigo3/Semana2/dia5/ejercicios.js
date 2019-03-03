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
// 8
console.log("ejercicio 8");
var antiguedad = 4;
var sueldo = 2000;
var bonoantiguedad = 0;
var bonosueldo = 0;
var bonofinal = 0;
if(antiguedad>2 && antiguedad<5){
    bonoantiguedad = sueldo*0.20;
}
if(antiguedad>=5){
    bonoantiguedad = sueldo*0.30;
}
if(sueldo<1000){
    bonosueldo = sueldo*0.25;
}
if(sueldo>1000 && sueldo<=3500){
    bonosueldo = sueldo*0.15;
}
if(sueldo>3500){
    bonosueldo = sueldo*0.10
}
if(bonoantiguedad>bonosueldo){
    bonofinal = bonoantiguedad;
}else{
    bonofinal = bonosueldo;
}
console.log("to bono final es de "+ bonofinal);
console.log("to bono por antiguedad es "+ bonoantiguedad);
console.log("to bono por sueldo es "+ bonosueldo);
console.log("tu sueldo es de "+ sueldo + " soles");

// 9
console.log("ejercicio 9");
var planA = 1200;
var planB = 950;
var alcohol = true;
var lentes = true;
var disease = true;
var edad = 40;
var a1A = 0, a1B = 0, a2A = 0, a2B = 0, a3A = 0, a3B = 0;
if(alcohol == true){
    a1A = planA*0.10;
    a1B = planB*0.10;
}
if(lentes == true){
    a2A = planA*0.5;
    a2B = planB*0.5;
}
if(disease == true && edad>40){
    a3A = planA*0.25;
    a3B = planB*0.25;
}else{
    if(disease == true){
        a3A = planA*0.10;
        a3B = planB*0.10;
    }
    if(edad>40){
        a3A = planA*0.10;
        a3B = planB*0.10;
    }
}
console.log("el costo de tu seguro en el plan A sera "+ (planA + a1A + a2A + a3A)+ " soles");
console.log("el costo de tu seguro en el plan B sera "+ (planB + a1B + a2B + a3B)+ " soles");
// 10
console.log("ejercicio 10");
var Presupuesto = 50000;
var costoxkm = 20;
if((costoxkm*750*2)<=Presupuesto){
    console.log("Puedes ir a Mexico");
}else{
    console.log("quedarse en casa");
}
if((costoxkm*800*2)<=Presupuesto){
    console.log("puedes ir a Acapulco");
}
if((costoxkm*1200*2)<=Presupuesto){
    console.log("puedes ir a Puerto Vallarta");
}
if((costoxkm*1800*2)<=Presupuesto){
    console.log("puedes ir a Cancun");
}
// 11
console.log("ejercicio 11");
var antiguedad = 3;
var bono;
if(antiguedad == 1){
    bono = 100
}
if(antiguedad == 2){
    bono = 200
}
if(antiguedad == 3){
    bono = 300
}
if(antiguedad == 4){
    bono = 400
}
if(antiguedad == 5){
    bono = 500
}
if(antiguedad > 5){
    bono = 1000
}
console.log("su bono sera de "+bono);

// 12
console.log("ejercicio 12");
var sueldoxhora = 10;
var horas = 46;
var max1 = 40, max2 = 45;
var sueldofinal;
if (horas<=40){
    sueldofinal=horas*sueldoxhora;
}
if(horas<=50){
    if(horas>max2 && horas<51){
        sueldofinal = (horas - max2)*sueldoxhora*3+((max2 - max1)*sueldoxhora*2)+(max1*sueldoxhora);
    }
    if(horas>max1 && horas<max2){
        sueldofinal = (horas - max1)*sueldoxhora*2+(max1*sueldoxhora);
    }
}else{
    console.log("no puede trabajar mas de 50 horas");
}
console.log("su sueldo es "+ sueldofinal);

// 13
console.log("ejercicio 13");
var alumnos = 46;
var costoxalumno;
if(alumnos>100){
    costoxalumno = 20;
}
if(alumnos<=100 && alumnos>=50){
    costoxalumno = 30;
}
if(alumnos<=49 && alumnos>=20){
    costoxalumno = 40;
}
if(alumnos<20){
    costoxalumno = 70;
}
var costototal = costoxalumno*alumnos;
console.log("hay "+alumnos+ " alumnos");
console.log("el costo por alumno sera "+ costoxalumno);
console.log("el costo final sera "+costototal);

// 14
console.log("ejercicio 14");
var nota = 8,calificacion;
if(nota == 10){
    calificacion = "A"; 
}
if(nota == 9){
    calificacion = "B"; 
}
if(nota == 8){
    calificacion = "C"; 
}
if(nota == 8 || nota == 7){
    calificacion = "D"; 
}
if(nota >= 0 && nota <= 5){
    calificacion = "D"; 
}
console.log("la calificacion es "+ calificacion);

// 15
console.log("ejercicio 15");
var dia = 5;
if(dia == 1){
    console.log("Lunes");
}
if(dia == 2){
    console.log("Martes");
}
if(dia == 3){
    console.log("Miercoles");
}
if(dia == 4){
    console.log("Jueves");
}
if(dia == 5){
    console.log("Viernes");
}
if(dia == 6){
    console.log("Sabado");
}
if(dia == 7){
    console.log("Domingo");
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
// 19
var sexo = "mujer", edad = 55;
if (edad < 16){
    console.log("vacuna A");
}
if(edad >= 16 && edad <70 && sexo == "hombre" ){
    console.log("vacuna A");
}
if(edad >= 16 && edad < 70 && sexo == "mujer" ){
    console.log("vacuna B");
}
if (edad >= 70){
    console.log("vacuna C");
}

// 20
console.log("ejercicio 20");
// modelo A=1, B=2, C=3
// talla 30=1, 32=2, 36=3
var modelo = 1, talla = 1, metrosdetela;
var costotela = 40, manodeobra;
if(modelo == 1){
    metrosdetela = 1.5;
    manodeobra = costotela*0.80;
}
if(modelo == 2){
    metrosdetela = 1.8;
    manodeobra = costotela*0.95;
}
if(talla == 1){
    cargoadicional = (manodeobra+costotela)*4
}
if(talla == 3){
    cargoadicional = (manodeobra+costotela)*4
}
var costofinal = costotela+manodeobra+cargoadicional;
var ganancia = costofinal*0.30;
var preciodeventa = costofinal+ganancia;
console.log("el costo final es "+costofinal);
console.log("la ganancia es "+ganancia);
console.log("el precio de venta sera de "+preciodeventa);

// 21
var saldoanterior = 3000;
var montoxcompras = 1000;
var pagoanterior = 600;
var saldoactual = saldoanterior-montoxcompras+pagoanterior;


if (pagoanterior<saldoanterior*0.15){
    saldoactual=(saldoanterior-pagoanterior)*1.12+200;
}else{
    saldoactual=saldoanterior+compras
    minimo
}