$(function () {
    var btnAnimar = $("#btnAnimar");
    var objetivo = $("#objetivo");
    var barra = $("#barra")

    // btnAnimar.click(function () {
    //     objetivo.animate({
    //         borderRadius: '50%'
    //     }, {
    //             duration: 3000,
    //             step: function (valor) {
    //                 objetivo.html(`cargando ${valor*2}%`)
    //             }
    //         });
    // });
    btnAnimar.click(function () {
        objetivo.animate({
            cualquiercosa: 100
        }, {
                duration: 3000,
                step: function (valor) {
                    var nvalor = Math.round(valor);
                    barra.html(`cargando ${nvalor}%`),
                    barra.css("width", `${valor}%`);
                    objetivo.css("BorderRadius",`${valor}%`);
                    if (nvalor == 100) {
                        barra.html("Completo")
                    }
                }
            });
    });

    function mover(elemento,atributo,valor){
        elemento.animate({i:valor},{
            duration:2000,
            step: function(valor){
                elemento.css(atributo,`${valor}px`);
            };
        });
    }
    mover(objetivo,"marginTop",300);
});