window.addEventListener("load", function () {





    function borrartabla() {
            var elmtTable = document.getElementById('tabla');
            var trs = elmtTable.getElementsByTagName('tr');
            var rowCount = trs.length;
            tablaprincipal.setAttribute("hidden", "hidden");
            dibujarFilas(jsonCompleto.data, tabla);
            for (var i = 0; i < rowCount; i++) {
                console.log(trs[0]);
                elmtTable.removeChild(trs[0]);
            }
        }

    //otra forma de borrar
    /*function borrartabla() {
        tabla.innerHTML = "";
    }*/

    function dibujarFilas(data, tabla) {
        for (let i = 0; i < data.length; i++) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${data[i].id}</td>
                                <td>${data[i].first_name}</td>
                                <td>${data[i].last_name}</td>
                                <td><img src=${data[i].avatar} width="30%"></td>`;
            tabla.appendChild(tr);
        }

    }

    let boton = document.querySelector("#boton");
let botonborrar = document.querySelector("#boton2");
let cargando = document.querySelector("#carga");
let tablaprincipal = document.querySelector("#tablaprincipal");
cargando.setAttribute("hidden", "hidden");
tablaprincipal.setAttribute("hidden", "hidden");

function cargarAjax() {
    tabla.innerHTML = ""
    cargando.removeAttribute("hidden");
    //creando un obj XMLHttpRequest
    //imaginemos que xhr tendra el
    // contenido de una pagina
    var xhr = new XMLHttpRequest();
    // configurar los estados por los que la variable
    // chr va a pasar desde su creacion hasta
    // el fin de la comunicacion del servidor.

    // lla funcion onreadystatechange se ejecuta
    // cada vez que la variable readystate(varialbe que indica el
    //estado de mi request), cambia de valor
    xhr.onreadystatechange = function () {
        switch (xhr.readyState) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                tablaprincipal.removeAttribute("hidden");
                cargando.setAttribute("hidden", "hidden");
                let jsonCompleto = JSON.parse(xhr.responseText);
                let tabla = document.getElementById("tabla")
                dibujarFilas(jsonCompleto.data, tabla);

        }
    }
    // open() => configura el verbo HTTP
    // y la direccion a consumir
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    // send()=> envia cabeceras y contenidos a la ruta de
    // la funcion open, y abre dicha ruta en la variable xhr
    xhr.send(null);
}


boton.onclick = cargarAjax;
botonborrar.onclick = borrartabla;
});
