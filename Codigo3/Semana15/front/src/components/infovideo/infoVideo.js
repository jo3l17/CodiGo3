import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabContainer from './TabContainer';

export default class infoVideo extends Component {

    constructor(props) {
        super(props);
        // console.log(props.match.params.id);
        this.state = {
            value:0,
            info:[{usu_nom:"nose"},{usu_email:"nel"}]
        }
    }
    async componentDidMount() {
        await fetch(`http://localhost:3700/api/video/${this.props.match.params.id}`)
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data.content)
                this.setState({
                    info:data.content
                })
            })
    }
    TabContainer(props) {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {props.children}
            </Typography>
        );
    }
    handleChange=(event, newValue)=> {
        this.setState({
            value:newValue
        })
    }

    render() {
        let { info } = this.state;
        return (
            <React.Fragment>
                <div>
                    #Queda!
                <hr />
                    {this.props.match.params.id}
                    <iframe title={this.props.match.params.id} width="1650" height="600" src={info.vid_link}></iframe>
                </div>
                <div style={{flexGrow: 1,
                    backgroundColor: "#64ff80"}}>
                    <AppBar position="static">
                        <Tabs 
                        value={this.state.value}
                        onChange={this.handleChange}>
                            <Tab label="Comentarios" />
                            <Tab label="Likes" />
                        </Tabs>
                    </AppBar>
                    {this.state.value === 0 && <TabContainer data={info}/>}
                    {this.state.value === 1 && <TabContainer data={info}/>}
                </div>
            </React.Fragment>
        )
    }
}
