window.onload = ()=>{
    // Declaracion de Variables
    let btnGetCanchas = $("#btnGetCanchas")
    let btnCrearCanchita = $("#btnCrearCanchita")
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
        });
    };
    let dibujarTabla = data=>{
        $("#tablita").empty();
        var tabla = `<thead><tr><th>ID</th><th>Nombre</th><th>Direccion</th></tr></thead>`;
        tabla+=`<tbody>`
        data.forEach(fila=>{
            tabla+=`
                        <tr>
                            <td>${fila.key}</td>
                            <td>${fila.val().nombre}</td>
                            <td>${fila.val().direccion}</td>
                        </tr>
                    `;
        });
        tabla+=`</tbody>`
        $("#tablita").append(tabla);
    }
    let crearCancha = ()=>{
        let nombre = "Nueva Cancha";
        let direccion = "Nueva Direccion";
        let referencia = firebase.database().ref("canchitas");
        // INSERTANDO UN REGISTRO EN LA BASE DE DATOS
        // 1.- Generear o crear un nuevo id para el registro
        const nuevoKey = referencia.push().key;
        // 2.- Insertar el registro
        // La funcion child hace referencia a un hijo de la "referencia"
        // La funcion set() recibe un JSON con la data que se guardada
        // dentro de la referencia.
        referencia.child(nuevoKey).set({
            nombre:nombre,
            direccion:direccion
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
};