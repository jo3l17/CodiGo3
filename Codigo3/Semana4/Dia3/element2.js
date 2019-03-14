var xprincipal = document.getElementById("principal");
//createElement([nombre]) => crea un nuevo elemento html
var parrafo = document.createElement("p");
parrafo.innerHTML = "Hola, soy un parrafo";
parrafo.style.color = "blue";
//elemento1.appendChild([elemento2]) => agrega al elemento1
// el elemento2 al final de todos sus hijos directos
xprincipal.appendChild(parrafo);
for (let i = 0; i < 5; i++) {
    let miParrafo = document.createElement("p");
    miParrafo.innerHTML = `Texto del Parrafo ${i+1}`;
    xprincipal.appendChild(miParrafo);
}

//Crear una tabla de n elementos
// cada fila tendra los campos
// nro (numeracion automatica)
// cantidad(ingresado por el usuario)
// P.unitario(ingresado por el usuario)
// P.total(calculado por el sistema)
// Al final de la tabla mostrar el total de la compra

//pidiendo n elementos al usuario
var n =+prompt("ingrese la cantidad de elementos");

var seccion = document.getElementById("MiSeccion");
//creando la tabla
var tabla = document.createElement("table");
//creando la cabecera
var trCabecera = document.createElement("tr");
//creando los <th></th> "columnas para la cabecera"
var thNro = document.createElement("th");
thNro.innerHTML = "Nro";
var thCant = document.createElement("th");
thCant.innerHTML = "Cantidad";
var thDesc = document.createElement("th");
thDesc.innerHTML = "Descripcion";
var thPunit = document.createElement("th");
thPunit.innerHTML = "P. Unitario";
var thPtotal = document.createElement("th");
thPtotal.innerHTML = "P. Total";
//insertando los ths al tr
trCabecera.appendChild(thNro);
trCabecera.appendChild(thCant);
trCabecera.appendChild(thDesc);
trCabecera.appendChild(thPunit);
trCabecera.appendChild(thPtotal);
//insertando el tr dentro de la tabla
tabla.appendChild(trCabecera);
seccion.appendChild(tabla);
tabla.border = 1;
let pFinal = 0;
for (let i = 0; i < n; i++) {
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerHTML =`${i+1}`;

    let tdCant = document.createElement("td");
    let xcant = parseFloat(prompt(`Ingrese la cantidad del item ${i+1}`));
    tdCant.innerHTML = xcant;

    let tdDesc = document.createElement("td");
    let xdesc = prompt(`Ingrese la descripcion del elemento ${i+1}`);
    tdDesc.innerHTML = xdesc;

    let tdPunit = document.createElement("td");
    let xpunit = parseFloat(prompt(`Ingrese el P. Unit del item ${i+1}`));
    tdPunit.innerHTML=xpunit;

    let tdPtotal = document.createElement("td");
    let xptotal = xcant*xpunit;
    tdPtotal.innerHTML= `S/.${xptotal}`;

    pFinal=pFinal+xptotal
    tr.appendChild(tdNro);
    tr.appendChild(tdCant);
    tr.appendChild(tdDesc);
    tr.appendChild(tdPunit);
    tr.appendChild(tdPtotal);
    tabla.appendChild(tr)
}
let trFinal = document.createElement("tr");
let tdTituloFinal = document.createElement("td");
tdTituloFinal.innerHTML = "PRECIO TOTAL"
tdTituloFinal.colSpan=4;
let tdMontoFinal = document.createElement("td");
tdMontoFinal.innerHTML = `S/.${pFinal}`
trFinal.appendChild(tdTituloFinal);
trFinal.appendChild(tdMontoFinal);
tabla.appendChild(trFinal);



//setAttribute("atributo","valorDelAtributo");
tabla.setAttribute("id","miTabla");
tabla.setAttribute("qwerty","9");
//removeAttribute("atributo");
//eliminar una atributo de un elemento
tabla.removeAttribute("qwerty");
//getAttribute("atributo");
//toma el valor del atributo indicado
console.log(tabla.getAttribute("id"));

//lastchild => ultimo elmento hijo de un elemento
console.log(tabla.lastChild);
//firstchild => ultimo elmento hijo de un elemento
console.log(tabla.firstChild);
//childNodes => devuelve todos los elementos hijos
//de un elemento
console.log(tabla.childNodes);


