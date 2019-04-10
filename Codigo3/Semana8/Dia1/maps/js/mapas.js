window.onload = () => {
    
    var poly = new google.maps.Polyline({
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });;
    
    //var coordAnterior = {}; 
    var image="./rezisedgiphy.gif"
    var mapaGoogle, miPosicion;
    var btnColocarMarcador = document.getElementById("btnMiPosicion");
    var btnQuitar = document.getElementById("btnQuitar");
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
    let configurarListeners= ()=>{
        
        mapaGoogle.addListener("click",(coords)=>{
            let milatLng={
                lat:coords.latLng.lat(),
                lng:coords.latLng.lng(),
                
            };
            var path = poly.getPath();
            path.push(coords.latLng);
            
            var marcador = new google.maps.Marker(
                {
                    position:milatLng,
                    icon:image,
                    draggable:true
                });
                
                
                
                
            marcador.addListener("dblclick",()=>{
                marcador.setMap(null);
                //path.pop(coords.latLng);
            });
            //añadiendo el evento drag al marcador creado
            /*marcador.addListener("drag",(coords)=>{
                console.log(`lat= ${coords.latLng.lat()}`);
            })*/
            marcador.addListener("drag",(coords)=>{
                path.push(coords.latLng);
            });
            marcador.addListener("dragend",(coords)=>{
                console.log(`lng= ${coords.latLng.lng()}`);
            })
            marcador.addListener("dragstart",(coords)=>{
                console.log(`lng= ${coords.latLng.lng()}`);
            })
            
            //agregar el marcador de google
            marcador.setMap(mapaGoogle);
            /*let coordPolyline = [
                coordAnterior,
                {
                    lat: coords.latLng.lat(),
                    lng: coords.latLng.lng()
                }
            ]
            coordAnterior = {
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng()
            };
            let myPolyLine = new google.maps.Polyline({
                path:coordPolyline,
                strokeColor: '#ff0000',
                strokeWeight:1
            });
            myPolyLine.setMap(mapaGoogle);*/
            poly.setMap(mapaGoogle);
        })
    };
    let colocarMarcador = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                miPosicion = new google.maps.Marker({
                    position: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    },title:"aqui estoy"
                });
                miPosicion.addListener("dblclick",()=>{
                    miPosicion.setMap(null);
                });
                // Asigna el mapa en el que el marcador va a aparecer
                miPosicion.setMap(mapaGoogle);
                // setCenter => Re-posiciona el campo de visualizaacion del mapa de Google
                mapaGoogle.setCenter({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
            }, (error) => {
                console.log(error.message);
            });
        } else {
            alert("atencion no a autorizado a acceder a su ubicacion")
        }
    }
    let quitarMarcador=()=>{
        miPosicion.setMap(null);
    }
    btnQuitar.onclick = quitarMarcador;
    btnColocarMarcador.onclick = colocarMarcador;
    configurarMapa();
};