class Camioneta extends Vehiculo {
    turbo = new Boolean(false);
    /**
     * Sobre escritura del constructor
     */
    constructor(placa, color, categoria, turbo) {
        super(placa,color,categoria);
        this.turbo=turbo;
    }
    /**
     * Funcion que llama a imprimir datos para aumentar una linea
     */
    imprimirDatosCamioneta(){
        this.imprimiDatos();
        console.log(`--- Turbo =>\t${this.turbo}`);        
    }

}