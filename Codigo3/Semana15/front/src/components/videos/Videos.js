import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Video from '../video/Video';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


export default class Videos extends Component {



    constructor(props) {
        super(props);
        this.state = {
            load: false,
            videos: []
        }
    }

    componentDidMount() {
        // consumir la api de videos con un fetch
        fetch('http://localhost:3700/api/video')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);

                this.setState({
                    load: true,
                    videos: data.content
                });
            });
    }

    render() {


        let { load, videos } = this.state

        if (load) {
            return (
                <React.Fragment>
                    <Grid container item xs={12} spacing={3}>
                        {
                            videos.map(video => (<Video key={video._id} video={video} />))
                        }
                    </Grid>
                        <Fab color="primary" aria-label="Add" component={Link} to='/crearvideo' style={{position:'absolute',bottom:'30px',right:'30px'}}>
                        <Icon>add_icon</Icon>
                        </Fab>
                    
                </React.Fragment>
            )
        }
        return (
            <div>
                <LinearProgress variant="query" />
            </div>
        )

    }
}
