// this => representa al nombre del objeto en este caso mascota
var mascota = {
    nombre: "Chancho",
    raza: "Bull Terrier",
    nombreCompleto : function(edad){
        console.log(`El nombre es: ${this.nombre}
        y tiene ${edad} anios`);
    },
    nombreyRaza: function(){
        return `Nombre => ${this.nombre} Raza => ${this.raza}`
    },
    nuevoNombre: function(name){
        this.nombre = name;
    }

}
mascota.nombreCompleto(4);
console.log(mascota.nombreyRaza());
mascota.nuevoNombre("Chanchito");
mascota.nombreCompleto(4);
