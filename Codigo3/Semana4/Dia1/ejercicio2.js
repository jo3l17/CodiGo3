var ClaseElectrodomestico = function (price=200,basecolor="verde",consume = "A", weight=30) {
    var electrodomestico = {
        precioBase: price,
        color: basecolor,
        consumo: consume,
        peso: weight,
        categoriaConsumo: function () {
            if (this.consumo == "A") {
                aumentoconsumo = 100
            }
            if (this.consumo == "B") {
                aumentoconsumo = 80
            }
            if (this.consumo == "C") {
                aumentoconsumo = 70
            }
            return aumentoconsumo;
        },
        tamanio: function () {
            if (this.peso >= 0 && this.peso < 20) {
                aumentotamanio = 10
            }
            if (this.peso >= 20 && this.peso < 50) {
                aumentotamanio = 50
            }
            if (this.peso >= 50 && this.peso < 80) {
                aumentotamanio = 80
            }
            return aumentotamanio;
        },
        texto: function(){
            var preciofinal = this.precioBase+this.categoriaConsumo()+this.tamanio();
            return preciofinal;
        }
    }
    return electrodomestico;
}

//var primerconsumo = clasepersona(prompt("ingrese precio"),prompt("ingrese color"),+prompt("ingrese Tipo de consumo A B o C"),+prompt("ingrese peso"));
//console.log(primerconsumo);
console.log(`el precio base es ${ClaseElectrodomestico().precioBase}`);
console.log(`El aumento por tamanio es ${ClaseElectrodomestico().tamanio()}`);
console.log(`El aumento por consumo es ${ClaseElectrodomestico().categoriaConsumo()}`);
console.log(`El precio final es ${ClaseElectrodomestico().texto()}`);
