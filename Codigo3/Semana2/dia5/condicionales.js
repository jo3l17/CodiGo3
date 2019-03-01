// condicionales
// if => si la condicion se cumple
// else =>cuando la condicion no se cumple
// COMPARADORES ARITMETICOS
// >    ->    Mayor
// <    ->    Menor
// >=   ->    mayor o igual
// <=   ->    menor o igual
// ==   ->    igual en valor
// ===  ->    igual en valor y en tipo de dato
// !=   ->    diferente en valor
// !==  ->    diferente en valor y tipo de dato
// COMPARADORES LOGICOS
// &&   |  y  |  and
// ambas condiciones deben ser verdaderas para dar un resultado verdadero
// ||   |  o  |  or
// al menos una de ambas condiciones debe ser verdadera para dar un resultado verdadero

// !    |negacion|not

var edad = 17;
if(edad == 17){
    console.log("si pasele joven!");
}
else{
    console.log("no, vaya a limpiarse los mocos")
}

// ejemplo de comparadores
var x=90;
var y=80;
var z=15;

if ((x/2)>(z*3) || (z>(y+x)/8) && y!= 81){
    console.log("verdadero")
}
else{
    console.log("falso")
}
// calcular si un año es bisiesto
var anio = 2024;
// tiene que ser multiplo de 4 y no debe ser multiplo de 100
// o en todo caso que sea multiplo de 400
if(((anio%4==0)&&(anio%100!=0)) || (anio%400==0)){
    console.log("el año es bisiesto")
}
else{
    console.log("el año no es bisiesto")
}

var sueldo = 2500.00;
if (!(sueldo>2500)){
    console.log("si es mayor");
}
else{
    console.log("no es mayor")
}

var apto = true;
if(!apto){
    console.log("No es apto para conducir");
}
else{
    console.log("Si es apto para conducir");
}

// si es ropa para dama hacer un 15% dscto sobre el precio
// si es ropa para varon hacer un 20% dscto sobre el precio
// si la  talla es m hacer un 10% dscto sobre el precio

var talla = "M";
var genero = "varon";
var precio = 100.00;
var preciofinal = 0;

if(genero=="Dama"){
    preciofinal = precio-precio*0.15;
}else{
    preciofinal = precio-precio*0.20;
}

if(talla=="M"){
    preciofinal =preciofinal-preciofinal*0.10
}
console.log("Precio Final "+preciofinal);
console.log(`Precio Final ${preciofinal}`);

