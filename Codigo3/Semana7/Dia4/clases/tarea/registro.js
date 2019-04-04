class Registro{
    regId = new Number();
    regFechIn = new Date();
    regFechFin = new Date();
    regVehiculo = new Vehiculo("","","");
    regPrecio = new Number();
    constructor(regId,FechIn,FechFin,Vehiculo,Precio){
        this.regId=regId;
        this.regFechIn=FechIn;
        this.regFechFin=FechFin;
        this.regVehiculo=Vehiculo;
        this.regPrecio=Precio;
    }
}