window.onload = ()=>{
    // Declaracion de Variables
    var i = 0;
    var image="./locate.png"
    let btnGetCanchas = $("#btnGetCanchas")
    let btnCrearCanchita = $("#btnCrearCanchita")
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
    let configurarListeners = ()=>{
        mapaGoogle.addListener("click",(coords)=>{
            if (i==0) {
                let milatLng={
                    lat:coords.latLng.lat(),
                    lng:coords.latLng.lng(),
                };
                $("#inputLat").val(coords.latLng.lat());
                $("#inputLng").val(coords.latLng.lng());
                var marcador = new google.maps.Marker(
                    {
                        position:milatLng,
                        icon:image,
                        draggable:true
                    });
                marcador.addListener("dblclick",()=>{
                    marcador.setMap(null);
                    i--;
                });
                marcador.addListener("drag",(coords)=>{
                });
                marcador.addListener("dragend",(coords)=>{
                    $("#inputLat").val(coords.latLng.lat());
                    $("#inputLng").val(coords.latLng.lng());
                });
                marcador.addListener("dragstart",(coords)=>{
                });
                i++;
                marcador.setMap(mapaGoogle);
            };
        });
    };
    let iniciarFirebase = ()=>{
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
    let getCanchitas = ()=>{
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
    referencia.on('value',(data)=>{
        imprimirData(data);
        dibujarTabla(data);
    });
    };
    let imprimirData = data =>{
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
    let dibujarTabla = data=>{
        $("#tablita").empty();
        var tabla = `<thead><tr><th>ID</th><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr></thead>`;
        tabla+=`<tbody>`
        data.forEach(fila=>{
            tabla+=`
                        <tr>
                            <td>${fila.key}</td>
                            <td>${fila.val().nombre}</td>
                            <td>${fila.val().direccion}</td>
                            <td>${fila.val().telefono}</td>
                        </tr>
                    `;
        });
        tabla+=`</tbody>`
        $("#tablita").append(tabla);
    }
    let crearCancha = ()=>{
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
        referencia.child(nuevoKey).set({
            Latitud:Latitud,
            Longitud:Longitud,
            direccion:direccion,
            nombre:nombre,
            telefono:telefono
        },(error)=>{
            if(error){
                console.log(error);
            }
        });
    };
    // Iniciando Configuracion
    iniciarFirebase();
    // asignando el evento al boton getCanchas
    btnGetCanchas.click(getCanchitas);
    btnCrearCanchita.click(crearCancha);
    configurarMapa();
}