var cadena = "Tecsup Pasion por la Tecnologia";
document.write(`<p> Longitud de la cadena ${cadena.length}</p>`);
document.write(`<p>caracter en la posicion 5 = ${cadena.charAt(5)}</p>`);
document.write(`<p>Cadena en Mayusculas = ${cadena.toUpperCase()}</p>`);
document.write(`<p>Cadena en Minusculas = ${cadena.toLowerCase()}</p>`);
var arreglo = cadena.split(" ");
document.write(`<p>Converir la cadena en un arreglo dado un separador ${arreglo}</p>`);
console.log(arreglo);
document.write(`<p>Obtener la primera posicion de un caracter/subcadena en una cadena ${cadena.indexOf("pas")}</p>`);
document.write(`<p>Quitar los espacios en blanco a los extremos de una cadena ${cadena.trim()}</p>`);
document.write(`<p>Reemplaza la primera ocurrencia ocurrencias de un caracter/cadena por otro ${cadena.replace("e","H")}</p>`);
document.write(`<p>Extraer una subcadena de la cadena dado un inicio y un fin = ${cadena.slice(5,9)}</p>`);
document.write(`<p>Extraer una subcadena de la cadena dado un inicio y una cantidad = ${cadena.substr(5,4)}</p>`)

//EJERCICIOS
//1.- => Algoritmo para mostrar la cantidad de vocales que tiene una cadena
//2.- => Algoritmo para invertir una cadena
//3.- => Algoritmo para ver el numero de veces, que se repite una cadena dentro de otra cadena
//4.- => Algoritmo para ver si una frase es palindromo o capicua
//78.-=> Algoritmo para capitalzar una frase

document.write(`<b> ejercicio 1 </b>`);
var cadenaej1 = "Tecsup Pasion por la Tecnologia";
document.write(`<p>la frase es ${cadenaej1}</p>`)
var contadorvocales = 0;
    for (let i = 0; i <= cadenaej1.length; i++) {
        if(cadena.charAt(i)=="a"||cadena.charAt(i)=="e"||cadena.charAt(i)=="i"||cadena.charAt(i)=="o"||cadena.charAt(i)=="u" ){
            contadorvocales++
        }
    }
document.write(`<p>el numero de vocales en la frase es ${contadorvocales}</p>`);

document.write(`<b> ejercicio 2 </b>`);
var cadenaej2 = "Tecsup Pasion por la Tecnologia";
var j = cadenaej2.length-1;
var cadenanueva="";
for (let i = 0; i < cadenaej2.length; i++) {
    cadenanueva=cadenanueva+cadenaej2.charAt(j);
    j--;
}
document.write(`<p>cadena invertida es ${cadenanueva}</p>`);

document.write(`<b> ejercicio 3 </b>`);
var cadenaej3 = "hola mundo hola asead hola mundo asdsade hola asad";
var contadorcadena=0;
var busqueda="hola"
for (let i = 0; i < cadenaej3.length; i++) {
    //cadenaotra=cadenaej3.substr(posicion,cadenaej3.length-1-i)
    if (cadenaej3.substr(i,busqueda.length)==busqueda) {
        contadorcadena++;
    }
}
console.log(contadorcadena);


document.write(`<b> ejercicio 4 </b>`);
// var cadenaej4 = "anitalavalatina";
// var longitud = cadenaej4.length;
// for (let i = 0; i < longitud; i++) {

// }

document.write(`<b> ejercicio 5 </b>`);
var cadenaej5 = "Hola mundo hola asead hola mundo asdsade hola asad";
var cadenaCapitalizada = new Array (cadenaej5.length);
var busqueda=" "
for (let i = 0; i < cadenaej5.length; i++) {
    if (cadenaej5.substr(i,busqueda.length)==busqueda) {
        cadenaCapitalizada[i+1] = cadenaej5[i+1].toUpperCase();
    }
}
console.log(cadenaCapitalizada);