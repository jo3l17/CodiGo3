import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class TabContainer extends Component {
    constructor(props) {
        super(props)
        console.log(props.state)
        console.log(props.data)
    }
    render() {
        if (this.props.state === 0) {
            return (
                <Typography component="div" style={{ padding: 8 * 3 }}>
                    {this.props.data.map(comentario => (
                        <Card key={comentario.usu_email} style={{ maxWidth: 1200, marginBottom: 10 }}>
                            <CardContent><h4>{comentario.usu_nom}</h4>
                                <p>{comentario.comment}</p>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Like
                                </Button>
                                <Button size="small" color="secondary">
                                    responder
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Typography>
            );
        } else if (this.props.state === 1) {
            return (
                <Typography component="div" style={{ padding: 8 * 3 }}>
                    <div>{this.props.data.length} likes</div>
                </Typography>
            )
        }
    }
}
