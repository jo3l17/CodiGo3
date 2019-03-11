var clasepersona = function(name, age, DNI, weight, height){

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
    toString: function(){
        console.log(`nombre => ${nombre}`);
        console.log(`edad => ${edad}`);
        console.log(`dni => ${dni}`);
        console.log(`peso => ${peso}`);
        console.log(`altura => ${altura}`);
        console.log(`IMC => ${this.indiceMC()}`);
        console.log(`Mayor de edad => ${this.mayor}`);
    }
    }
    return persona;
}
//var primeraPersona = clasepersona(prompt("ingrese nombre"),+prompt("ingrese edad"),+prompt("ingrese DNI"),+prompt("ingrese peso"),+prompt("ingrese altura en metros"));
console.log(clasepersona(prompt("ingrese nombre"),+prompt("ingrese edad"),+prompt("ingrese DNI"),+prompt("ingrese peso"),+prompt("ingrese altura en metros")));