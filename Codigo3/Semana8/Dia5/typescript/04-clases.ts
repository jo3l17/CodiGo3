class Vehiculo{
    marca:string="Defecto";
    private _id:number=0;
    //public color :string = "";
    constructor(public color:string,
                public modelo:string){
        //this.color=color;
    }
    get id():number{
        return this._id;
    }
    set id(nuevoId:number){
        this._id=nuevoId;
    }
    public imprimirModeloYMarca():void{
        console.log((this.modelo+" "+this.marca));
    }
    private metodoPrivado() {
        console.log("este es un metodo privado");
    }
    static obtenerFecha():Date{
        return new Date();
    }
}
let objVehiculo = new Vehiculo("rojito","CX-3");
console.log(`modelo ${objVehiculo.modelo}`);
objVehiculo.imprimirModeloYMarca();

objVehiculo.id=90;
console.log(objVehiculo.id);

console.log(Vehiculo.obtenerFecha());
console.log("chau");



// codigo para crear un atributo privado en javascript
/*let Carro = ()=>{
    let privado=9;
    let objCarro={
        atributoPublico:8,
        getPrivado:():number=>{
            return privado;
        }
    }
    return objCarro;
}
let nuevoCarro = new Carro();
console.log(nuevoCarro.getPrivado());*/
