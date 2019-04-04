$(function () {
    var registros = new Array();

    /**
     * funcion que genera la plantilla de un li = listitem
     * @param {Registro} objregistro recibe todo un registro
     */
    var idboton=0;
    let generarLi = function(objregistro){
        idboton++
        return `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${objregistro.regVehiculo.placa}
            <span class="badge badge-primary badge-pill pd-2">${objregistro.regVehiculo.categoria}</span>
            <span class="badge badge-primary badge-pill pd-2">${objregistro.getHoraEntrada()}</span>
            <span class="badge badge-primary badge-pill pd-2">${objregistro.regVehiculo.color}</span>
            <button class="btn btn-danger" id="${idboton}">salir</button>
            </li>`

    }

    imprimirRegistros = function () {
        $("#Lista").html("");
        for (let i = 0; i < registros.length; i++) {
            let contenido = generarLi(registros[i])
            $("#Lista").append(contenido);
        }
    }

    let registrar = function (e) {
        e.preventDefault();
        let objvehiculo = new Vehiculo($("#placa").val(), $("#color").val(), $("#categoria").val());
        let objRegistro = new Registro(new Date(),new Date(), objvehiculo, 3.50)
        registros.push(objRegistro)
        imprimirRegistros();
        console.log(registros);
    }


    $("#boton").click(registrar);
    /*$("#boton").click(function (e) {
        e.preventDefault();
        var placa = $("#placa").val()
        var categoria = $("#categoria").val()
        var color = $("#color").val()
        console.log(placa)
        console.log(categoria)
        console.log(color);
        var hola = new Vehiculo(placa, categoria.color)
        console.log(hola)
        registros.push(hola)
        
    });*/



});