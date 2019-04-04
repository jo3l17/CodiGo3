$(function () {

    /**
     *  funcino para dibujar la tabla con el metodo GET
     * @param {JSON} usuarios arreglo de objetos de tipo usuario
     */
    let dibujarTabla = function (usuarios) {
        var tabla = document.createElement("table");
        tabla.className = "table table hover table-dark table-bordered table-hover";
        let contenido = `
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Lat - Lng</th>
        </tr>
        </thead>
        `;
        contenido += "<tbody>"

        for (let i = 0; i < usuarios.length; i++) {

            contenido += "<tr>"
            contenido += `<td>${usuarios[i].id}</td>`;
            contenido += `<td>${usuarios[i].name}</td>`;
            contenido += `<td>${usuarios[i].email}</td>`;
            contenido += `<td>${usuarios[i].address.geo.lat} - ${usuarios[i].address.geo.lng}</td>`;
            contenido += "</tr>";

        }
        contenido += "</tbody>"
        tabla.innerHTML = contenido
        $("#contenido").append(tabla);
        //var table = $("<table></table>")
    };
    let dibujarTablaPost = function (usuario) {
        $("#contenidoPost").html("")
        /*var tabla = document.createElement("table");
        tabla.className = "table table hover table-dark table-bordered table-hover";
        let contenido = `
        <thead>
        <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
            <th>userId</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${usuario.id}</td>
        <td>${usuario.title}</td>
        <td>${usuario.body}</td>
        <td>${usuario.userId}</td>
        </tr>
        </tbody>
        `;
        tabla.innerHTML = contenido
        $("#contenidoPost").append(tabla);*/
        let tabla = $("<table></table>")
        tabla.addClass("table table-dark table-bordered table-hover");
        let contenido = `
        <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>body</th>
                <th>UserID</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.title}</td>
                <td>${usuario.body}</td>
                <td>${usuario.userId}</td>
            </tr>
        </tbody>`
        tabla.html(contenido)
        $("#contenidoPost").append(tabla);
    };

    // evento click del boton GET
    $("#btnGet").click(function () {
        $("#contenido").html("");
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            timeout: 1000,
            data: null,
            success: function (respuesta) {
                dibujarTabla(respuesta);
            },
            error: function (error) {
                console.log(error);
            },
            beforeSend: function () {
                console.log("antes de realizar la peticion");
            }
        });
    });

    //evento click del boton POST
    $("#btnPost").click(function () {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "https://jsonplaceholder.typicode.com/posts",
            timeout: 1000,
            data: JSON.stringify({
                title: "Administrador",
                body: "Contenido Extra",
                userId: 90
            }),
            success: function (respuesta) {
                dibujarTablaPost(respuesta);
            },
            error: function (error) {
                console.log(error);
            },
            beforeSend: function () {
                console.log("antes de realizar la peticion");
            }
        });
    });
});