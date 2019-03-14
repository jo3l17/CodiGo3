//Evento => es una funcion que se ejecuta tras capturar
//una accion en un elemento.

// onload => funcion que se ejecuta
// cuando todos los elementos internos se han terminado de cargar
window.onload = function () {
    // funcion para la forma 1
    // function cambiarColor(){
    //     var xbody = document.querySelector("body");
    //     xbody.style.backgroundColor="aquamarine";
    // }
    var xdiv = document.getElementById("miDiv")
    // forma 1 => referenciando a una funcion
    // xdiv.onclick=cambiarColor;
    xdiv.onclick = function () {
        var xbody = document.querySelector("body");
        xbody.style.backgroundColor = "aquamarine";
    }


    // addEventListener(nombre_del_elemento,funcion_a_ejecutar)
    var xdiv2 = document.getElementById("miDiv2");
    xdiv2.addEventListener("click",function () {
        var xbody = document.querySelector("body")
        xbody.style.backgroundColor = "black";
    });
    var xdiv3 = document.getElementById("miDiv3");
    xdiv3.onclick = function(evento){
        console.log(evento);
        //target=>el elemento que recibio el evento
        console.log("target =>",evento.target);
        //altKey => true si el click fue hecho presionando la tecla alt
        //altKey =>false si fue un click normal
        console.log("click + alt =>",evento.altKey);
        //ctrlKey => true si el click fue hecho presionando la tecla alt
        //ctrlKey =>false si fue un click normal
        console.log("click + ctrl =>",evento.ctrlKey);
        //shiftKey => true si el click fue hecho presionando la tecla alt
        //shiftKey =>false si fue un click normal
        console.log("click + shift =>",evento.shiftKey);
        //clientX y clientY => coordenadas del mouse en relacion a la ventana
        console.log(`Mouse en X (en la ventana) => ${evento.clientX}`);
        console.log(`Mouse en Y (en la ventana) => ${evento.clientY}`);
        //offsetX y offsetY => coordenadas del mouse en relacion a la ventana
        console.log(`Mouse en X (en relacion al elemento) => ${evento.offsetX}`);
        console.log(`Mouse en Y (en relacion al elemento) => ${evento.offsetY}`);
    };
    var body =document.getElementById("mibody")
    body.onclick =function (crear) {
        var rad = Math.random() * (100 - 50) + 50;
        var random = ["blue","green","yellow","red","tomato","greenyellow","orchid","navy"]
        var selectcolor = Math.round(Math.random()*random.length);
        let circulo = document.createElement("div");
        circulo.style.width=`${rad}px`;
        circulo.style.height=`${rad}px`;
        circulo.style.backgroundColor=random[selectcolor];
        circulo.style.borderRadius="50%";
        circulo.style.position="absolute";
        circulo.style.left=`${crear.clientX}px`;
        circulo.style.top=`${crear.clientY}px`;
        body.appendChild(circulo)
        console.log(crear.clientX);
        console.log(crear.clientY);
        
        

    }

}