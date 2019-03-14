//prompt("ingrese cantidad")
var tbody =document.getElementById("tbody");
var elementos = document.getElementById("elementos");
var numero = document.getElementById("numero");
var cantidad = document.getElementById("cantidad " );
var descripcion = document.getElementById("descripcion");
var precioUnitario = document.getElementById("precioUnitario");
var precioTotal = document.getElementById("precioTotal");
var precioFinal = document.getElementById("precioFinal")

var xprincipal = document.getElementById("principal");
var table = document

precioFinal.innerHTML=0;

var nroelementos = +prompt("ingrese el numero de elementos comprados");

for (let i = 0; i < nroelementos; i++) {
    elementos.appendChild(numero);
    numero.innerHTML=`${i+1}`;
    elementos.appendChild(cantidad);
    cantidad.innerHTML=+prompt("ingrese cantidad el elemento");
    elementos.appendChild(descripcion);
    descripcion.innerHTML=prompt("ingrese descripcion");
    elementos.appendChild(precioUnitario);
    precioUnitario.innerHTML=+prompt("ingrese precio por unidad")
    precioTotal.innerHTML=precioUnitario.innerHTML*cantidad.innerHTML
    elementos.appendChild(precioTotal);
    precioFinal.innerHTML=0+precioTotal.innerHTML;
    tbody.appendChild(elementos);
}

