class Vehiculo{

    placa=new String("");
    color = new String("");
    _categoria = new String("");
    

    /**
     * 
     * @param {string} newPlaca 
     * @param {string} newColor 
     * @param {string} newCategoria 
     */
    constructor(newPlaca,newColor,newCategoria){
        this.placa = newPlaca;
        this.color = newColor;
        this._categoria = newCategoria;
    };

    // Getters y Setters
    // Getter => Función que retorna el valor de un atributo encapsulado
    // Setter => Función que modifica o [Settea] el valor de un atributo encapsulado
    // a continuacion getters y setters con funciones
    // tradicionales
    setColor(newColor){
        this.color = newColor;
    };
    getColor(){
        return this.color;
    };
    // A continuacion, getters y setter de acuerdo al
    // estandar ES6
    set categoria(newCategoria){
        this._categoria = newCategoria;
    };
    get categoria(){
        return this._categoria;
    };



    imprimirDatos(){
        console.log(`/////INFO DEL VEHICULO/////`);
        console.log(`-----Placa => ${this.placa}-----`);
        console.log(`-----Categoria => ${this._categoria}-----`);
        console.log(`-----Color => ${this.color}-----`);
    };
    /**
     * Metodo que devuelve los 3 primeros caracteres 
     * de la placa del vehiculo
     * [return] 3 caracteres
     */

    getLetrasDePlaca(){
        return this.placa.substr(0,3);
    };

    /**
     * Metodo estatico que devuelve la fecha actual
     * [return] objeto Date con fecha actual
     */
    static getFecha(){
        let fecha = new Date();
        return fecha
    };

}