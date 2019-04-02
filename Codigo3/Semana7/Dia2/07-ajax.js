$(function () {
    let dibujarTabla = function(usuarios){
        var tabla = document.createElement("table");
        tabla.className = "table table hover table-dark table-bordered table-hover" ;
        let contenido =`
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


    $("#btnGet").click(function(){
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
    })
})