//compatible con window.addevenlistener("load",function(){});
$(function(){
//selectores
//selector de ID
var btnColor = $('#btnColor');
//selector de etiquetas
//innerHTML ===> html("texto");
$("p").html("nuevo texto para todos");
//seteando texto del parrafo que esta en la posicion 2
// de todos los parrafos del documento
$("p:eq(2)").html("Texto para el tercer parrafo")

btnColor.click(function(){
    //$(this)=>hace referencia al control que esta
    //ejecutando la funcion en la que nos encontramos
    $(this).html("Me hiciste Click");
    //css("atributo","valor")=>asigna un nuevo atributo
    // estilos al elemento
    $(this).css("border-radius","10px")
    .css("padding","20px")
});
$('#btnClases').click(function(){
    $("p:eq(0)").addClass("btn btn-primary")
                .addClass("btn-block");
});

});
