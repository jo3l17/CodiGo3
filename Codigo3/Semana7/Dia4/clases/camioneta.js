class Camioneta extends Vehiculo{
    
    turbo = new Boolean(false);
    /**
     * Sobreescritura del constructor
     */
    constructor(newPlaca,newColor,newCategoria,newTurbo){
        /**
         * Funcion construcctora del pader(Vehiculo)
         * que recibe los 4 parametros, ya solo queda por
         * asignar el parametro turbo
         */
        super(newPlaca,newColor,newCategoria);
        this.turbo = newTurbo;
    };
    /**
     * Funcion que llama a la funcion imprirDatos 
     * para aumentar una linea de impresion
     */
    imprimirDatosCamioneta(){
        this.imprimirDatos();
        console.log(`-----Turbado => ${this.turbo}-----`);
    };

}