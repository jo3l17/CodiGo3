// local storage es para guardar datos en el navegador
window.addEventListener("load",function(){
    // localStorage => objeto que sirve para guardar datos en el navegador
    // OBS => los datos se pierden cuando el navegador es cerrado
    // setItem([clave],[valor])=>
    // clave => es el nombre de la variable que se creara en el localStorage
    // valor => es el valor que le pertenecera a dicha clave.
    localStorage.setItem("nombre","Jorge Luis");
    // getItem([clave])=>obtiene un valor dad una clave
    //document.querySelector("body").innerHTML = localStorage.getItem("nombre");
    // removeItem([clave])=> borra una clave del localStorage
    localStorage.removeItem("nombre");
    // creando un objeto que represente una factura 
    let factura = {
        fecha:'18.03.2019',
        total:'S/.1900.00',
        productos: [{
            nombre:"Cocina"
        },{
            nombre:"lavadora"
        },{
            nombre:"refrigreador"
        }]
    };
    // Json.stringify([objeto])=convierte el objeto a una cadena o string
    let facturaString = JSON.stringify(factura);
    localStorage.setItem("factura",facturaString);

    // JSON.parse([string]) => convierte una cadena o string a objeto JSON
    let facturaStorageStrings = localStorage.getItem("factura");
    let facturaStorageJSON = JSON.parse(facturaStorageStrings);
    console.log(facturaStorageJSON);

    var boton = document.getElementById("button");
    var link = document.getElementById("link");
    boton.addEventListener("click",function(evento){
        // preventDefault => anula cualquier accion por
        // defecto que se relaice al hacer un click
        // a un elemento
        evento.preventDefault();
    });
    link.addEventListener("click",function(evento){
        evento.preventDefault();
    });
});