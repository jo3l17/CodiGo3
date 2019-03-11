



var clasemascota = function(apodo){

    var mascota = {
        nombre: apodo,
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

    return mascota;
};

var fido = clasemascota("Fido");
var lucas = clasemascota("Lucas");

console.log(fido.nombreyRaza());
console.log(lucas.nombreyRaza());




