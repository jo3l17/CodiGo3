class Vehiculo {
    placa = new String("");
    color = new String("");
    _categoria = new String("");
    /**
     * Constructor de la clase
     * @param {String} placa 
     * @param {String} color 
     * @param {String} categoria 
     */
    constructor(placa, color, categoria) {
        this.placa = placa;
        this.color = color;
        this._categoria = categoria;
    }
    //Getter => funcion que retorna el valor de un atributo encapsulado
    //Setter => funcion que modifica el valor de un atributo encapsulado
    setColor(color) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    //getter y setter de acuerdo al estandar ES6
    set categoria(categoria){
        this._categoria=categoria;
    }
    get categoria(){
        return this._categoria;
    }


    /**
     * Metodo que imprime los datos del vehiculo
     */
    imprimiDatos() {
        console.log(`////INFO DEL VEHICULO\\\\\\\\\n--- Placa =>\t${this.placa}\n--- Color=>\t\t${this.color}\n--- Categoria=>\t${this._categoria}`);
    }
    /**
     * Devuelve los 3 primeros caracteres de la placa
     * [return] 3 caracteres
     */
    getLetrasDePlaca() {
        return this.placa.substr(0, 3);
    }
    /**
     * Metodos staticos que devuelve la fecha actual
     * [return] objeto Date con fecha  actual
     */
    static getFecha() {
        return new Date();
    }

}
