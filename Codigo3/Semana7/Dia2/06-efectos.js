$(function(){
    var btnOcultar = $("#btnOcultar");
    var btnMostrar = $("#btnMostrar");
    var btnToggle = $("#btnToggle");
    var cuadrado = $("#cuadrado");
    btnOcultar.click(function(){
        // hide => oculta el elemento
        //cuadrado.hide('slow');
        // fadeOut => oculta el elemento con efecto fade
        //cuadrado.fadeOut('slow');
        cuadrado.slideUp('slow');
    });
    btnMostrar.click(function(){
        // show => muestra el elemento
        //cuadrado.show('slow');
        // fadeIn => muestra el elemento con efecto fade
        //cuadrado.fadeIn('slow');
        cuadrado.slideDown('slow');
    });
    btnToggle.click(function(){
        // toggle => oculta y muestra el elemento
        //cuadrado.toggle('slow');
        // fadeToggle=> oculta y muestra con el efecto fade
        //cuadrado.fadeToggle('slow');
        //slideToggle => oculta y muestra con el efecto slide
        cuadrado.slideToggle('slow');
    });
})