import React, { Component } from 'react'
import Producto from './Producto';

export default class Productos extends Component {
    render() {
        let { productos } = this.props;
        console.log(productos);

        return (
            <div>
                <h3>Lista de Productos</h3>
                {
                    // productos.map(prod => (<Producto prod={prod}/>))
                    productos.map(prod => {
                        return <Producto producto={prod} />
                    })
                }
            </div>
        )
    }
}
