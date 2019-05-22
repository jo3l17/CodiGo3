import React, { Component } from 'react';

class Formulario extends Component {

    nombreRef;
    precioRef;

    constructor(props){
        super(props);
        // creando referencias
        this.nombreRef=React.createRef();
        this.precioRef=React.createRef();
    }
    onSubmit=(e)=>{
        e.preventDefault();
        let objProducto={
            nombre:this.nombreRef.current.value,
            precio:this.precioRef.current.value
        }
        this.props.agregarProducto(objProducto);
        // console.log(objProducto);
    }

    render() {
        return (
            <form>
                <p>
                    <label>Nombre del producto</label>
                    <input type="text" ref={this.nombreRef}/>
                </p>
                <p>
                    <label>Precio del producto</label>
                    <input type="number" ref={this.precioRef}/>
                </p>
                <p>
                    <button type="submit" onClick={this.onSubmit}>Enviar formulario</button>
                    
                </p>
            </form>
        );
    }
}

export default Formulario;