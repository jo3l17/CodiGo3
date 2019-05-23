import React, { Component } from 'react'

export default class Gasto extends Component {
    render() {
        let {gasto}=this.props;
        // console.log(gasto);
        
        return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{gasto.descripcion}</h5>
                    <small>{gasto.fecha}</small>
                </div>
                <p className="mb-1">S/. {gasto.monto}</p>
                <small>{gasto.id}</small>
            </a>
        )
    }
}
