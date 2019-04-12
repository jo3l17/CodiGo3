window.onload = () => {
    // Declaracion de Variables
    var i = 0;
    var marcadorCrearCancha = new google.maps.Marker(
        {
            
        });

    var image = "./ball.gif"
    let btnGetCanchas = $("#btnGetCanchas")
    let btnCrearCanchita = $("#btnCrearCanchita")
    let btnGuardarCambios = $("#btnGuardarCambios");
    let btnBuscar = $("#btnBuscar");
    let btnSubirArchivo = $("#btnSubirArchivo");
    let inputSubirArchivo = document.getElementById("inputSubirArchivo");
    
    let guardarCambios = ()=>{
        let key = $("#inputKey2").val();
        let referencia = firebase.database().ref(`canchitas/${key}`);
        referencia.update({
            nombre: $("#inputNombre2").val(),
            direccion: $("#inputDireccion2").val(),
            telefono: $("#inputTelefono2").val(),
            Latitud: $("#inputLat2").val(),
            Longitud: $("#inputLng2").val(),
        }).then(()=>{
            subirArchivo();
            $("#modalEditarCancha").modal("hide");
        }).catch(()=>{
            alert("Error al modificar los gatos");
        });
    };
    let configurarMapa = () => {
        mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
            center: { lat: -16.4310231, lng: -71.5189684 },
            zoom: 15,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a6b8ff"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#3ac100"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ff4f53"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "stylers": [
                        {
                            "color": "#f1fa54"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });

        configurarListeners();
    };
    let configurarMapatraer = () => {
        $("#mapita").removeAttr("hidden");
        mapaGoogle2 = new google.maps.Map(document.getElementById('mapita'), {
            center: { lat: -16.4310231, lng: -71.5189684 },
            zoom: 13,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a6b8ff"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#3ac100"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ff4f53"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "stylers": [
                        {
                            "color": "#f1fa54"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });
    }
    let configurarMapaeditar = () => {
        mapaGoogleEditar = new google.maps.Map(document.getElementById('mapa2'), {
            center: { lat: -16.4310231, lng: -71.5189684 },
            zoom: 15,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a6b8ff"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#3ac100"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ff4f53"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "stylers": [
                        {
                            "color": "#f1fa54"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#33ec2f"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#1febfc"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });
        configurarListeners1();
    };
    let configurarListeners1 = () => {
        mapaGoogleEditar.addListener("click", (coords) => {
            if (i == 0) {
                let milatLng = {
                    lat: coords.latLng.lat(),
                    lng: coords.latLng.lng(),
                };
                $("#inputLat2").val(coords.latLng.lat());
                $("#inputLng2").val(coords.latLng.lng());
                var marcador = new google.maps.Marker(
                    {
                        position: milatLng,
                        icon: image,
                        draggable: true
                    });
                marcador.addListener("dblclick", () => {
                    marcador.setMap(null);
                    $("#inputLat2").val("")
                    $("#inputLng2").val("")
                    i--;
                });
                marcador.addListener("drag", (coords) => {
                });
                marcador.addListener("dragend", (coords) => {
                    $("#inputLat2").val(coords.latLng.lat());
                    $("#inputLng2").val(coords.latLng.lng());
                });
                i++;
                marcador.setMap(mapaGoogleEditar);
            };
        });
    };
    let configurarListeners = () => {
        
        mapaGoogle.addListener("click", (coords) => {
            if (i == 0) {
                let milatLng = {
                    lat: coords.latLng.lat(),
                    lng: coords.latLng.lng(),
                };
                marcadorCrearCancha = new google.maps.Marker(
                    {
                        position: milatLng,
                        icon: image,
                        draggable: true
                    });
                $("#inputLat").val(coords.latLng.lat());
                $("#inputLng").val(coords.latLng.lng());
                
                marcadorCrearCancha.addListener("dblclick", () => {
                    marcadorCrearCancha.setMap(null);
                    $("#inputLat").val("")
                    $("#inputLng").val("")
                    i--;
                });
                marcadorCrearCancha.addListener("drag", (coords) => {
                });
                marcadorCrearCancha.addListener("dragend", (coords) => {
                    $("#inputLat").val(coords.latLng.lat());
                    $("#inputLng").val(coords.latLng.lng());
                });
                i++;
                marcadorCrearCancha.setMap(mapaGoogle);
            };
        });
        
    };
    let iniciarFirebase = () => {
        var config = {
            apiKey: "AIzaSyA6_ZBZEM_EIIzPYTCnZ7ByaPQTLKTulpo",
            authDomain: "holamundo-596e2.firebaseapp.com",
            databaseURL: "https://holamundo-596e2.firebaseio.com",
            projectId: "holamundo-596e2",
            storageBucket: "holamundo-596e2.appspot.com",
            messagingSenderId: "834021297662"
        };
        firebase.initializeApp(config);
    }
    let getCanchitas = () => {
        // Conectarse a una base de datos
        // 1.-Tener una referencia al nodo al que nos conectaremos
        var referencia = firebase.database().ref('canchitas');
        // 2.-Traer la data a partir de la referencia
        // on => Trae la data una vez y cuando algun cambio ocurre
        //       en la base de datos la funcion on se vuelve a ejecutar
        //       automaticamente.Sin embargo, para que el cambio suceda
        //       de forma automatica, la funcion "on" debio ser llamada
        //       por lo menos 1 vez.
        // once => Trae la data una sola vez
        referencia.on('value', (data) => {
            configurarMapatraer(data);
            imprimirData(data);
            dibujarTabla(data);
            dibujarMarcadores(data);
        });
    };
    let dibujarMarcadores = data => {
        data.forEach(fila => {
            let milatLng = {
                lat: parseFloat(fila.val().Latitud),
                lng: parseFloat(fila.val().Longitud),
            };
            var marcador = new google.maps.Marker(
                {
                    position: milatLng,
                    icon: image,
                    draggable: false
                });
            marcador.setMap(mapaGoogle2);
        })
    }
    let imprimirData = data => {
        data.forEach(fila => {
            // mostrando el id de cada fila
            console.log(`ID:${fila.key}`);
            // mostrando campos normales
            console.log(`Nombre: ${fila.val().nombre}`);
            console.log(`Direccion: ${fila.val().direccion}`);
            console.log(`Telefono: ${fila.val().telefono}`);
            console.log(`Latitud: ${fila.val().Latitud}`);
            console.log(`Longitud: ${fila.val().Longitud}`);
        });
    };
    //mi forma
    /*let dibujarTabla = data => {
        $("#tablita").empty();
        var tabla = `<thead><tr><th>ID</th><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr></thead>`;
        tabla += `<tbody>`
        data.forEach(fila => {
            tabla += `
                        <tr>
                            <td>${fila.key}</td>
                            <td>${fila.val().nombre}</td>
                            <td>${fila.val().direccion}</td>
                            <td>${fila.val().telefono}</td>
                            <td><button onClick = "eliminarCanchaById('${fila.key}')" class="btn btn-danger">eliminar</button></td>
                            
                        </tr>
                    `;
        });
        tabla += `</tbody>`
        $("#tablita").append(tabla);
    }*/
    //otra forma
    let tablita = $("#tablita")
    let dibujarTabla = data => {
        tablita.html("");
        let thead = $("<thead></thead>");
        thead.append(`<tr><th>ID</th><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr>`);
        let tbody = $("<tbody></tbody>")
        tablita.append(thead);
        data.forEach(fila => {
            let tr = $("<tr></tr>");
            
            let botonEliminar = $("<button></button>");
            let botonEditar = $("<button></button>");
            
            botonEditar.click(() => {
                $("#inputKey2").val(fila.key);
                $("#inputNombre2").val(fila.val().nombre);
                $("#inputDireccion2").val(fila.val().direccion);
                $("#inputTelefono2").val(fila.val().telefono);
                $("#inputLat2").val(fila.val().Latitud);
                $("#inputLng2").val(fila.val().Longitud);
                $("#modalEditarCancha").modal('show')
            });
            botonEditar.html("Editar Cancha");
            botonEditar.addClass("btn btn-warning");

            botonEliminar.html("Eliminar Cancha");
            botonEliminar.addClass("btn btn-danger");
            botonEliminar.click(() => {
                eliminarCanchaById(fila.key)
            });
            let tdBoton = $("<td></td>");
            tdBoton.append(botonEliminar);

            let tdBotonEditar = $("<td></td>");
            tdBotonEditar.append(botonEditar);

            tr.append(`<td>${fila.key}</td>`)
            tr.append(`<td>${fila.val().nombre}</td>`)
            tr.append(`<td>${fila.val().direccion}</td>`)
            tr.append(`<td>${fila.val().telefono}</td>`)
            tr.append(tdBoton);
            tr.append(tdBotonEditar);
            tbody.append(tr);
        })
        tablita.append(tbody);
    };
    let crearCancha = () => {
        let nombre = $("#inputNombre").val();
        let direccion = $("#inputDireccion").val();
        let telefono = $("#inputTelefono").val();
        let Latitud = $("#inputLat").val();
        let Longitud = $("#inputLng").val();
        let referencia = firebase.database().ref("canchitas");
        // INSERTANDO UN REGISTRO EN LA BASE DE DATOS
        // 1.- Generear o crear un nuevo id para el registro
        const nuevoKey = referencia.push().key;
        // 2.- Insertar el registro
        // La funcion child hace referencia a un hijo de la "referencia"
        // La funcion set() recibe un JSON con la data que se guardada
        // dentro de la referencia.
        if (nombre == "" || direccion == "" || telefono == "" || Latitud == "" || Longitud == "") {
            alert("uno o mas campos estan vacios")
        } else {

            referencia.child(nuevoKey).set({
                Latitud: Latitud,
                Longitud: Longitud,
                direccion: direccion,
                nombre: nombre,
                telefono: telefono
            }, (error) => {
                if (error) {
                    console.log(error);
                }
            });
            $("#inputNombre").val("");
            $("#inputDireccion").val("");
            $("#inputTelefono").val("");
            $("#inputLat").val("");
            $("#inputLng").val("");
            marcadorCrearCancha.setMap(null);
        }
    };
    let buscarCancha = (evento)=>{
        evento.preventDefault();
        console.log("En buscar");
        let referencia = firebase.database().ref("canchitas");
        //equalTo => El valor tiene que coincidir exactamente.
        // startAt => similar a un like => [busqueda]%
        // endAt=> similiar a un like => %[busqueda]
        console.log($("#inputBuscar").val());
        
        referencia.orderByChild('nombre').startAt($("#inputBuscar").val()).on('value',data=>{
            data.forEach(fila=>{
                //muestra el key y el nombre de el archivo buscado
                console.log(fila.key);
                console.log(fila.val().nombre);
            });
        });
    };
    let subirArchivo = ()=>{
        let archivo = inputSubirArchivo.files[0];
        let nombre = archivo.name;
        let nombreFinal = +(new Date())+"-"+nombre
        //Referencia al Storage de Firebase
        let referenciaStorage = firebase.storage().ref();
        let metadata={
            contentType:archivo.type
        };
        referenciaStorage.child(`carpeta/${nombreFinal}`)
                            .put(archivo,metadata)
                            .then((response)=>{
                                //obtener la URL de descarga de la imagen
                                // devuelve una promesa
                                return response.ref.getDownloadURL()
                            }).then((url)=>{
                                console.log(url);
                                let referenciaDatabase = firebase.database().ref(`canchitas/${$("#inputKey2").val()}`)
                                return referenciaDatabase.update({imagen:url});
                            }).then(()=>{
                                console.log("archivo subido y cancha actualizada");
                            }).catch((error)=>{
                                console.log(error);
                            });
        /*console.log(nombreFinal);
        console.log(archivo.type);
        console.log(archivo.size);
        if((archivo.size/1024)>1){
            console.log("Subir otro archivo");
        }*/
        
        

    }



    // Iniciando Configuracion
    iniciarFirebase();
    // asignando el evento al boton getCanchas
    btnGetCanchas.click(getCanchitas);
    btnCrearCanchita.click(crearCancha);
    btnGuardarCambios.click(guardarCambios);
    btnBuscar.click(buscarCancha);
    btnSubirArchivo.click(subirArchivo);
    configurarMapa();
    configurarMapaeditar();
}
let eliminarCanchaById = (key) => {
    //let id = key;
    let referencia = firebase.database().ref(`canchitas/${key}`);
    referencia.remove().then(() => {
        console.log("eliminadocorrectamente");
    }).catch((error) => {
        console.log(error);

    });
};