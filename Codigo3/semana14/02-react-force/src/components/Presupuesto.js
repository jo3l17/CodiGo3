import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Presupuesto extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Tu presupuesto: <strong>S/.</strong> {this.props.presupuesto}
            </div>
        )
    }
}
Presupuesto.propTypes={
    presupuesto:PropTypes.number.isRequired,
}
