let alumno = {
    nombre: "jorge",
    codigo:1001,
    email:"jorgegarba@gmail.com",
    gustos:['rocK',"Chicharron"]
};

// let nombre = alumno.nombre;
// console.log(nombre);


/**
 * Creamos 3
 */
var {codigo,gustos,email:correo} = alumno;

console.log(codigo);
console.log(gustos);
console.log(correo);

var usuario = {
    codigo, //=codigo:codigo,
    correo, // correo: correo
    id:9000,
    codigoYCorreo: function(){
        console.log(this.codigo+"-"+this.correo);
        
    }
};


console.log(usuario);
usuario.codigoYCorreo();

// destructurando arreglos

let arreglo = [9,5,4,"otro gato"];
// creando 4 variables para cada uno de los elementos del arreglo
// por destructuracion
var [x,y,z,a] = arreglo;
console.log(a);
var[primer, ...resto]=arreglo;
console.log(primer);
console.log(resto);


