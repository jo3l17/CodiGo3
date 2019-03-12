var clasepersona = function(name = "joel", age=20, DNI=71787798, weight=75, height=1.75){

    var persona ={
    nombre:name,
    edad:age,
    dni:DNI,
    peso:weight,
    altura:height,
    indiceMC: function(){
        var indiceMC = this.peso/(this.altura**2);
        return indiceMC;
    },
    mayor: function(){
        var mayorDeEdad = false;
        if(this.edad>=17){
            var mayorDeEdad = true;
        }
        return mayorDeEdad;
    },
    texto: function(){
        console.log(`nombre => ${this.nombre}`);
        console.log(`edad => ${this.edad}`);
        console.log(`dni => ${this.dni}`);
        console.log(`peso => ${this.peso}`);
        console.log(`altura => ${this.altura}`);
        console.log(`IMC => ${this.indiceMC()}`);
        console.log(`Mayor de edad => ${this.mayor()}`);
    },
    }
    return persona;
}
//var primeraPersona = clasepersona(prompt("ingrese nombre"),+prompt("ingrese edad"),+prompt("ingrese DNI"),+prompt("ingrese peso"),+prompt("ingrese altura en metros"));
//console.log(clasepersona(prompt("ingrese nombre"),+prompt("ingrese edad"),+prompt("ingrese DNI"),+prompt("ingrese peso"),+prompt("ingrese altura en metros")));
console.log(clasepersona().texto());
console.log(clasepersona().indiceMC());

