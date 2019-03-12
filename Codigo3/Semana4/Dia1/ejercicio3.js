var claseSerie = function(){
    var serie={
        tituloprincipal:title,
        temp= [
            {
                titulo: "hola1",
                descripcion: "hola1"
            },
            {
                titulo: "hola2",
                descripcion: "hola2"
            }
        ],
        alquilado=rented,
        genero=gender,
        creador=creator,
        texto: function(){
            console.log(`el titulo es ${this.tituloprincipal}`);
            console.log(`temporadas ${this.temp[0].titulo} ${this.temp[0].descripcion}`);
            console.log(`temporadas ${this.temp[1].titulo} ${this.temp[1].descripcion}`);
        },
        alquiler: function(){
            if (this.alquilado==true) {
                console.log("la serie ya esta alquilada");
            }else{
                this.alquilado=true;
                console.log("alquilado");
            }
        },
        verInfoTemp: function(a){
            console.log(`Temporada ${a-1} descripcion ${this.temp[a-1].descripcion}`);
            
        }
    }
    return serie;
}