import React, { Component } from 'react'
import Gasto from './Gasto';
import Presupuesto from './Presupuesto';
import Resto from './Resto';

export default class ListaGastos extends Component {
    render() {
        let { gastos } = this.props;
        // console.log(gastos);

        return (
            <React.Fragment>
                <h4>Lista de Gastos</h4>
                <hr />
                {/* presupuesto */}
                <Presupuesto presupuesto={this.props.presupuesto}/>
                {/* lo que te queda */}
                <Resto presupuesto={this.props.presupuesto} resto={this.props.resto}/>
                <div className="list-group mt-2">
                    {gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)}
                </div>
            </React.Fragment>
        )
    }
}
