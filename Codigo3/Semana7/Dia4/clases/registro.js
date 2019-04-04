class Registro{
    regFechin = new Date();
    regFechfin = new Date();
    regVehiculo =  new Vehiculo("","","");
    regPrecio = new Number();

    constructor(newRegFechin,newRegFechfin,newRegVehiculo,newRegPrecio){
        this.regFechin = newRegFechin;
        this.regFechfin =newRegFechfin;
        this.regPrecio = newRegPrecio;
        this.regVehiculo = newRegVehiculo;
    }
    getHoraEntrada(){
        let horaEntrada = this.regFechfin.getHours();
        horaEntrada += ":";
        horaEntrada += this.regFechfin.getMinutes();
        return horaEntrada;
    }
    
}