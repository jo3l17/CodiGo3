import React, { Component } from 'react'
import Producto from './Producto';
import Button from './../ui/button';
import Formulario from './../Formulario';

export default class Productos extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        // El state es un objeto de Component que sirve para guardar datos
        // El state, solo se inicializa una veez
        this.state = {
            productos:this.props.productos
        };
    }

    componentDidMount() {
        // Componente que se ejecuta despues que el componente ha renderizado su vista.
        // usualmente se usa este componente para hacer peticiones asincronas
        // EJM: AJAX APIs, etc.
        console.log("componentDidMount");
        // setState es la funcion que recibe como parametro
        // el nuevo valor del obejto state
        setTimeout(() => {
            let {productos}=this.state;
        productos.push({
            nombre:'teclado',
            precio: 1800
        });
        this.setState({
            productos:productos
        })
        }, 5000);
    }
    componentWillUpdate() {
        // funcion que se ejecuta antes de que esl state sea modificado
        console.log("ComponentWillUpdate");
    }
    addProducto(){
        console.log("producto agregado");
        let {productos}=this.state;
        productos.push({
            nombre:'teclado',
            precio: 1800
        });
        this.setState({
            productos:productos
        })
    }
    addProductoFormulario=(objProducto)=>{
        let {productos}=this.state;
        productos.push(objProducto)
        this.setState({
            productos:productos
        })
    }

    render() {
        console.log("render");
        let { productos } = this.state;
        console.log(productos);

        return (
            <div>
                <h3>Lista de Productos</h3>
                {
                    // productos.map((prod,i) => (<Producto prod={prod} key={i}/>))
                    productos.map((prod, i) => {
                        return <Producto producto={prod}
                            key={i} />
                    })
                }
                <Button texto={"texto"}
                        click={this.addProduct}></Button>
                {/* <button className="btn-red"onClick={this.addProducto.bind(this)}>Agregar producto</button> */}
                <h4>Formulario</h4>
                <Formulario agregarProducto={this.addProductoFormulario}/>
            </div>
        )
    }
}
