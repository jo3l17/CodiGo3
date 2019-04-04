$(function(){
    // draggable => el elemento puede ser movido de su posicion cuando el click este presionado
    $(".cuadrado").draggable();
    // resizable => el elemento se puede modificar en tamaño
    $(".cuadrado").resizable();

    //sortable => los elemntos pueden ser ordenados por el usuario
    $(".peliculas").sortable({
        update: function(){
            console.log("la lista se ha modificado");
        }
    });
    $(".pequenio").draggable();
    // droppable => hace que el elemento puede recibir
    // a otros elementos en su interior
    $(".grande").droppable({
        drop:function(evento){
            console.log("Soltaron un elmento");
            console.log(evento);
            $(this).css("background-color","red");
        }
    });
    // 
    $("#btnAnimar").click(function(){
        // $(".objetivo:eq(0)").effect("explode");
        // $(".objetivo").effect("explode"); es lo mismo
        $(".objetivo:eq(0)").toggle("bind");
    })

    $("#imagen").click(function(){
        // $("#body").effect("explode");
        // $("#body").toggle("explode",1000);
        // $("#body").toggle("drop");
        // $("#body").toggle("slide");
        // $("#body").toggle("puff");
        // $("#body").toggle("fold");
        // $("#body").toggle("scale");
        $("#body").effect("shake",200);
        // $("#body").toggle("Transfer");
    });

    // tooltip()=> hace que el elemento en el que se ejecuta la funcion muestre
    // un cuadro de dialogo si y solo si, el elemento tiene
    // el atributo "title" en su etiqueta html
    $("#imagen").tooltip();

    $("#btnModal").click(function(){
        $("#miModal").dialog();
    });

})