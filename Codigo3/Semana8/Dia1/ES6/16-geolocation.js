window.onload = () => {
    let contenedor = document.getElementById("contenedor")
    let obtenerCoords = () => {
        //preguntarle al navegador si dispone del objeto
        //de geolocalizacion
        if (navigator.geolocation) {
            // obtener la ubicaion actual
            // recibe 2 callbacks
            // 1. el primer callback recibe un parametro con la posicion de nuestro equipo.
            // el primero parametro tiene un objeto coords
            // el objeto coords tiene una propiedad latitude
            // el objeto coords tiene una propiedad longitude
            // 2. el segundo callback recibe un parametro que representa un error.
            // navigator.geolocation.getCurrentPosition(pos => {
            navigator.geolocation.watchPosition((pos) => {
                contenedor.innerHTML = `latitud ${pos.coords.latitude} longitud ${pos.coords.longitude}`
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        contenedor.innerHTML = "El usuario denego el permiso para la geolocalizacion";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        contenedor.innerHTML = "La informacion no esta disponible";
                        break;
                    case error.TIMEOUT:
                        contenedor.innerHTML = "tiempo de espera agotado";
                        break;
                    case error.UNKNOWN_ERROR:
                        contenedor.innerHTML = "Error desconocido";
                        break;
                }
            });
        } else {
            contenedor.innerHTML = "No disponemos de geolocalizacion"
        }
    };
    obtenerCoords();
}