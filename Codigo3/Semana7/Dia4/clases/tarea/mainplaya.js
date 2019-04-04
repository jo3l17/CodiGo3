$(function () {
    var id = 1;
    var cantidad=0;
    var registros = { id: [], placa: [], color: [], categoria: [], fecha: [] };
    
    construirRegistro();
    $("#btnRegistrar").click(function (e) {
        e.preventDefault();
        var placa = $("#placa").val()
        var categoria = $('select[name="categorias"] option:selected').text()
        var color = $("#color").val()
        var fecha = new Date();
        var vehiculo = new Vehiculo(placa, color, categoria);
        var registro = new Registro(id, Date(), Date(), vehiculo, 3.50);
        //console.log(registro);

        //registros["placa"]=placa;
        //egistros["color"]=color;
        //registros["categoria"]=categoria;
        registros.id.push(id);
        registros.placa.push(placa);
        registros.color.push(color);
        registros.categoria.push(categoria);
        registros.fecha.push(fecha.getHours() + ":" + fecha.getMinutes());
        console.log(registros);

        
        dibujarRegistros(cantidad);
        cantidad++;
        // var registroTabla = document.createElement("li");
        // registroTabla.className = "list-group-item d-flex justify-content-between align-items-center";
        // var contenidoRegistro = `${placa} <span class="badge badge-primary badge-pill">${fecha.getHours() + ":" + fecha.getMinutes()}</span>`
        // registroTabla.innerHTML = contenidoRegistro;
        // $("#listita").append(registroTabla);
        // let registroString = JSON.stringify(registros);
        // localStorage.setItem("registros", registroString);


        id++;
        $("#formulario").trigger("reset");
    });
    function construirRegistro() {
        let stringRegistroStorage = localStorage.getItem("registros");
        if (stringRegistroStorage !== null) {
            let jsonRegistroStorage = JSON.parse(stringRegistroStorage);
            registros = jsonRegistroStorage;
            console.log(registros);
            
            dibujarRegistros(0);
        }
        else {
            console.log("No habia storage");

        }
    }
    function dibujarRegistros(cantidad) {
        $("#listita").html("");
        for (let i = 0; i < registros.placa.length; i++) {
            var registroTabla = document.createElement("li");
            registroTabla.className = "list-group-item d-flex justify-content-between align-items-center";
            var contenidoRegistro = `${registros.placa[i]}<hr><button class="btn btn-danger mr-2">Salida</button> <span class="badge badge-primary badge-pill">${registros.fecha[i]}</span>`
            registroTabla.innerHTML = contenidoRegistro;
            $("#listita").append(registroTabla);
            let registroString = JSON.stringify(registros);
            localStorage.setItem("registros", registroString);
        }
    }
})