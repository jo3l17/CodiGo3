// var persona = [];
// persona["nombre"] = "Jorge";
// persona["edad"] = 27;
// persona["DNI"] = 78787743;

// console.log(`El nombre es ${persona["nombre"]}`);

var personas = [];
var N = +prompt("ingrese el numero de personas que desea ingresar");
for (let i = 0; i < N; i++) {
    var persona = [];
    persona["nombre"] = prompt("ingrese el nombre");
    persona["edad"] = +prompt("ingrese la edad");
    persona["DNI"] = +prompt("ingrese el DNI");
    personas.push(persona);
}

var mayor = [0,"n"];
var menor = [500,"n"]; 

for (let i = 0; i <personas.length;i++){
    if (mayor[0] < personas[i]["edad"]){
        mayor[0] = personas[i]["edad"];
        mayor[1] = personas[i]["nombre"];
    }
    if (menor[0] > personas[i]["edad"]){
        menor[0] = personas[i]["edad"];
        menor[1] = personas[i]["nombre"];
    }
}
console.log(`la edad mayor es ${mayor[0]} y su nombre es ${mayor[1]}`);
console.log(`la edad menor es ${menor[0]} y su nombre es ${menor[1]}`);


