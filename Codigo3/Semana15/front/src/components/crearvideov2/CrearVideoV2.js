import React, { Component } from 'react'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class CrearVideoV2 extends Component {
    textField = {
        marginLeft: '10px',
        marginRight: '10px',
        width: '50%',
    }
    
    render() {
        return (
            <React.Fragment>
            <form style={{ display: 'flex',justifyContent:'center' }} noValidate autoComplete="off">
                <TextField
                    id="standard-helperText"
                    label="Nombre"
                    placeholder="Ejm: 05 - Introducción a Angular 8"
                    style={this.textField}
                    helperText="Ingrese el nombre del Video"
                    margin="normal"
                />
            </form>
            <form style={{ display: 'flex', justifyContent:'center' }} noValidate autoComplete="off">
                <TextField
                    id="standard-helperText"
                    label="Nombre"
                    defaultValue="Ejm-05 introduccion a Angular 8"
                    style={this.textField}
                    helperText="Ingrese"
                    margin="normal"
                />
            </form>
            </React.Fragment>
        );
    }
}

