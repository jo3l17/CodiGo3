var xprincipal = document.getElementById("principal");
//createElement([nombre]) => crea un nuevo elemento html
var parrafo = document.createElement("p");
parrafo.innerHTML = "Hola, soy un parrafo";
parrafo.style.color = "blue";
//elemento1.appendChild([elemento2]) => agrega al elemento1
// el elemento2 al final de todos sus hijos directos
xprincipal.appendChild(parrafo);
