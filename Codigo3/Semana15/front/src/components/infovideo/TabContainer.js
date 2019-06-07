import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class TabContainer extends Component {
    constructor(props){
        super(props)
        console.log(props.data)
    }
    render() {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {/* {
                    this.props.data.map(usuario=>(<div>{usuario.usu_nom}</div>))
                } */}
            </Typography>
        );
    }
}
