$(function(){
    // find()=> ayuda a seleccionar un elemento interno de una
    // seleccion previa
    // en este caso todos los li internos de de li.item-2
    $("li.item-2").find("li").css("color","blue");

    /*El ejemplo a continuacion, demuestra el uso de JQuery y javascript
    $("li.item-a")[0].innerHTML="ASDASD"*/

    //parent=> selecciona al padre de un elemento
    $("li.item-a").parent().parent().css("border","1px solid red");
    
});