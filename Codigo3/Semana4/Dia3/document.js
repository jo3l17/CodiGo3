// el objeto document,sirve para manipular cualquier
//elemento del DOM
// SELECTORES
//getElementById([id del elemento])
var xdiv1 = document.getElementById("div1");
console.log(xdiv1);
//getElementsbyClassName([nombre de la clase del/los elemento/s])
//Obtiene un arreglo de elementos dado el nombre de la clase
var xrojo = document.getElementsByClassName("rojo");
console.log(xrojo);
//getElementsBytagName([nombre de la etiqueta del/los elemento/s])
//Obtiene un arreglo de los elementos dado el nombre de la etiqueta
var xdivs = document.getElementsByTagName("div");
console.log(xdivs);
//querySelector([selector como en CSS3])
//obtiene un elemento que coincida con el selector
//como si estariamos usando CSS3
// var xddiv1 = document.querySelector("p>.div1[name='nombre']:not(span)");
var xddiv1 = document.querySelector("#div1");
console.log(xddiv1);
//querySelectorAll([selector como en CSS3])
//obtiene un conjunto de elementos que coincida con el selector
//como si estariamos usando CSS3
var xrojos = document.querySelectorAll(".rojo");
console.log(xrojos);

