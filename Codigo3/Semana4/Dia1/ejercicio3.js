var claseSerie = function(tittle="cualquiera", rented=true,gender="comedia",creator="Stan Lee"){
    var serie={
        tituloprincipal:tittle,
        temp: [
            {
                temporada: "hola1",
                descripcion: "hola1"
            },
            {
                temporada: "hola2",
                descripcion: "hola2"
            }
        ],
        alquilado:rented,
        genero:gender,
        creador:creator,
        texto: function(){
            console.log(`el titulo es ${this.tituloprincipal}`);
            console.log(`temporadas ${this.temp[0].temporada} ${this.temp[0].descripcion}`);
            console.log(`temporadas ${this.temp[1].temporada} ${this.temp[1].descripcion}`);
        },
        alquiler: function(){
            if (this.alquilado==true) {
                console.log("la serie ya esta alquilada");
            }else{
                this.alquilado=true;
                console.log("alquilado");
            }
        },
        verInfoTemp: function(a=1){
            console.log(`Temporada ${a} descripcion ${this.temp[a-1].descripcion}`);
        }
    }
    return serie;
}
claseSerie().verInfoTemp(1);
claseSerie().alquiler();
claseSerie().texto();
