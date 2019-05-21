import React, { Component } from 'react'

export default class Footer extends Component {
    render(props) {
        console.log(this.props);
        return (
            <div>
                Todos los derechos reservados &copy; ({this.props.datos.visitas} visitas)
            </div>
        )
    }
}
