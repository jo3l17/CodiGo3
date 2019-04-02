$(function(){
    
    var cuadrado = $(".cuadradito:eq(0)");
    var cuadrado2 = $(".cuadradito2:eq(0)");
    var bolita = $(".bolita:eq(0)");
    var input = $("#nombre");
    var body = $("body:eq(0)");
    // //mouseover
    //JAVASCRIPT NATIVO
    // cuadrado.addEventListener("mouseover",function(){});
    // cuadrado.onmouseover=function(){};
    // JQUERY
    // cuadrado.mouseover(function (){});
    cuadrado.mouseover(function(){
        $(this).css("border-radius","50%");
    });
    cuadrado.mouseout(function(){
        $(this).css("border-radius","0%");
    });
    // dbclick()=>doble click al elemento
    cuadrado.dblclick(function(){
        let colores = ["red","aquamarine","blue","darkblue","green"]
        $(this).css("background-color",colores[Math.floor((Math.random()*colores.length))]);
    });

    // hover=>recibe 2 funciones una para mouseover
    // y otra para mouseout;
    cuadrado2.hover(function(){
        $(this).css("transform","rotate(50deg)")
    },function(){
        $(this).css("transform","rotate(0deg)")
    });
    bolita.click(function () { 
        // obteniendo el valor de una propiedad en css
        var altura = $(this).css("height");
        // Separamos el numero entero de un arregl
        // de la siguiente forma[30,x]
        altura = +altura.split("p")[0];
        altura = altura+(altura*1/5);
        $(this).css("height",`${altura}px`).css("width",`${altura}px`)
        
        
    });

    //contextmenu => click derecho
    bolita.contextmenu(function (evento) {
        // preventDefault()=>previene el flujo normal del evento
        evento.preventDefault();
        // obteniendo el valor de una propiedad en css
        var altura = $(this).css("height");
        // Separamos el numero entero de un arregl
        // de la siguiente forma[30,x]
        altura = +altura.split("p")[0];
        altura = altura-(altura*1/5);
        $(this).css("height",`${altura}px`).css("width",`${altura}px`)
    });

    let miFocus = function () {
        $(this).css("outline","none");
        $(this).css("border","2px solid gray");
        $(this).css("border-radius","8px");
    }
    let miBlur = function () {
        $(this).css("outline","none");
        $(this).css("border","1px solid gray");
        $(this).css("border-radius","0px");
        $(this).css("padding","0px");
    }
    input.focus(miFocus);
    input.blur(miBlur);

    body.mousemove(function(evento){
        let otrabolita = document.createElement("div")
        otrabolita.setAttribute("class","bolita");
        otrabolita.style.position = "absolute";
        otrabolita.style.left = `${evento.clientX}px`;
        otrabolita.style.top = `${evento.clientY}px`;
        $(this).append(otrabolita)
    })

});