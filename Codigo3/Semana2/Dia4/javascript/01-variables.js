// VAARIABLES contiene un elemento
// se crean con el prefijo "var"
// sus nombres no pueden iniciar con un numero
// GRAL> en javascript, colocar un ";" al finalizar
// una sentencia o linea de codigo;
var x = 0;
// console.log(), sirve para mostrar datos en el navegador
// en la zona de la consola
x = 69;
var y = x;

y = y + 1;

console.log(y);
// una variable en javascript puede mutar de tipo de dato
x = "PORQUE";
console.log(x);


// TIPOS DE DATOS
console.log("===TIPOS DE DATOS===")
// NUMERICOS | NUMBER => Todos los numeros
var sueldo = 2500.50;
var edad = 25;
// TEXTOS | STRING | CADENAS => Conjunto de caracteres
var saludo = "Hola amiguitos";
var despedida = "Chau amiguitos";
// BOOLEANAS => (verdadero o falso) - (true o false)
var verdedero = true;
var falsa = false;

console.log(sueldo);
console.log(verdedero);
console.log(despedida);


// OPERADORES ARITMETICOS
console.log("===OPERADORES ARITMETICOS===")
//  + - * /
// % => modulo | mod
var n1 = 8, n2 = 9;
var suma = n1 + n2;
var resta = n1 - n2;
var division = n1 / n2;
var multiplicacion = n1 * n2;
// concatenar textos=> juntar textos o variables
console.log("n1 => " + n1);
console.log("n2 => " + n2);
console.log("suma => "+ suma);
console.log("resta => "+ resta);
console.log("division => "+ division);
console.log("multiplicacion => "+ multiplicacion);
console.log("modulo (20/7) residuo = > " + (20 % 7));

console.log("ejercicio 1");
console.log("area de un triangulo");
var base = 3, altura = 4;
console.log("valor de base = "+ base);
console.log("valor de altura = "+ altura);
var area = (base*altura)/2
console.log("el area del triangulo es " + area);

console.log("ejercicio 2");
console.log("cambio de dinero");
var pesos = 4;
console.log("valor en pesos mexicanos = "+ pesos);
var  dolares = pesos/19.30;
console.log("valor en dolares = "+ dolares);

console.log("ejercicio 3");
var birthyear = 1998, actualyear = 2019;
console.log("año de nacimiento = "+ birthyear);
var age = actualyear - birthyear;
console.log("edad = "+ age);

console.log("ejercicio 4");
var costoxhora = 2.5, tiempo = 60;
console.log("horas usadas = "+ tiempo);
var cobrototal = costoxhora * tiempo;
console.log("se debe pagar = "+ cobrototal);

console.log("ejercicio 5");
var m2 = 45, precioxm2 = 23;
console.log("se trabajaron "+m2+" metros cuadrados");
var cobrototal = precioxm2*m2;
console.log("precio a pagar = "+cobrototal+ " soles");

console.log("ejercicio 6");
var ladoA = 4, ladoB = 5, hipotenusa = Math.sqrt((ladoA**2)+(ladoB**2));
console.log("los lados del triangulo rectangulo miden = "+ladoA+" y "+ladoB);
console.log("la hipotenusa es = "+hipotenusa);

console.log("ejercicio 7");
var kmxrecorrer = 15, costoxkm = 2, cobrototal = kmxrecorrer*costoxkm;
console.log("los kilometros por recorrer son "+ kmxrecorrer);
console.log("el precio sera = "+ cobrototal);

console.log("ejercicio 8");
var velocidad = 20, distancia = 100, tiempo = distancia/velocidad;
console.log("la distancia por recorrer es = "+ distancia + " metros");
console.log("el tiempo para recorrerlo sera de = "+ tiempo + "horas");

console.log("ejercicio 9");
var costoxminuto = 1.5, minutosusados = 30, cobrototal = costoxminuto*minutosusados;
console.log("minutos usados = "+ minutosusados);
console.log("tiene que pagar = "+ cobrototal);

console.log("ejercicio 10");
var m3 = 45, precioxm3 = 23;
console.log("se usaron "+m3+" metros cubicos");
var cobrototal = precioxm3*m3;
console.log("precio a pagar = "+cobrototal+ " soles");

console.log("ejercicio 11");
var KW = 45, precioxKW = 23;
console.log("se usaron "+KW+" kilowatts");
var cobrototal = precioxKW*KW;
console.log("precio a pagar = "+cobrototal+ " soles");

console.log("ejercicio 12");
var precio = 100, preciocondescuento = precio*0.8, IVA = precio*0.15, preciototal = preciocondescuento+IVA;
console.log("el precio con descuento es = "+ preciocondescuento);
console.log("el precio final es = "+ preciototal);

console.log("ejercicio 13");
var sueldo = 2500, ahorroxsemana = sueldo*0.15, ahorroxmes =ahorroxsemana*4,ahorroxanio= ahorroxmes*12;
console.log("se ahorran "+ahorroxanio+ " soles x anio")

console.log("ejercicio 14");
var costohotelxdia = 120, costocomidaxdia = 80, pesosxdia = 100,dias =20, cheque = dias*(costocomidaxdia+costohotelxdia+pesosxdia)
console.log("precio del hotel por dia = "+ costohotelxdia);
console.log("precio de comida por dia = "+ costocomidaxdia);
console.log("dinero diario = "+pesosxdia);
console.log("dias = "+dias);
console.log("cheque a pagar = "+ cheque);

console.log("ejercicio 15");
var R = 4, I = 3, V = R * I, P = V * I;
console.log("el voltaje es "+ V)
console.log("la potencia es "+ P)

console.log("ejercicio 19");
var base = 8, altura = 5, area = (base*altura)/2
console.log("valor de base = "+ base);
console.log("valor de altura = "+ altura);
console.log("el area del cuadradoo es " + area);

console.log("ejercicio 20")
var c1 = 15, c2 = 18, c3 = 20, promedio = c1*0.25 + c2*0.25 + c3*0.50 
console.log("el promedio del alumno es = "+ promedio)

console.log("ejercicio 21")
var edadanios=18, edadmeses=edadanios*12, edadsemanas=edadanios*52.1429, edaddias=edadanios*365, edadhoras=edaddias*24;
console.log("la personas ha vivido "+ edadanios+ " años")
console.log("la personas ha vivido "+ edadmeses+ " meses")
console.log("la personas ha vivido "+ edadsemanas+ " semanas")
console.log("la personas ha vivido "+ edaddias+ " dias")
console.log("la personas ha vivido "+ edadhoras+ " horas")

console.log("ejercicio 22")
var costoxminuto = 1.5, minutosusados = 30, cobrototal = costoxminuto*minutosusados;
console.log("minutos usados = "+ minutosusados);
console.log("tiene que pagar = "+ cobrototal);

console.log("ejercicio 23")
var costoxdia = 150, estancia = 30, cobrototal = costoxdia*estancia;
console.log("estancia = "+ estancia+ " dias");
console.log("tiene que pagar = "+ cobrototal);