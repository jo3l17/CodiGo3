// JSON = Javascript object notaion
// DEFINIDENDO UN OBJETO CON PROPIEDADES
var persona = {
    nombre: "Jorge",
    edad: 27,
    DNI: "12345678"
};
// con el . se accede a la propiedad de un objeto
console.log(`nombre => ${persona.nombre}`);
console.log(`edad => ${persona.edad}`);
console.log(`DNI => ${persona.DNI}`);

// MODIFICANDO UNA DE LAS PROPIEDADES DEL OBJETO
persona.nombre = "Luis";
console.log(`nombre => ${persona.nombre}`);
console.log(`edad => ${persona.edad}`);
console.log(`DNI => ${persona.DNI}`);

// Creando un objeto con objetos como contenido
var vehiculo = {
    placa: "V5r-674",
    marca: "Land Rover",
    color: {
        color1:"Marron",
        color2:"Tierra"
    },
    propietarios: [
        {
            nombre:"Jorge",
            fecha:"2015"
        },
        {
            nombre:"Daniel",
            fecha:"2018"
        }
    ]
};
console.log(vehiculo.color.color2);

for(i=0;i<vehiculo.propietarios.length; i++){
    console.log(`${vehiculo.propietarios[i].nombre} => ${vehiculo.propietarios[i].fecha}`)
    console.log(vehiculo.propietarios[i])
}

