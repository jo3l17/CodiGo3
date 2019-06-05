import React, { Component } from 'react'

export default class infoVideo extends Component {

    constructor(props){
        super(props);
        console.log(props.match.params.id);
        this.state={
            info:[]
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3700/api/video/${this.props.match.params.id}`)
        .then(response=>{
            return response.json()
        }).then(data=>{
            this.setState({
                info:data.content
            })

        })
    }

    render() {
        let {info} = this.state;
        return (
            <div>
                #Queda!
                <hr/>
                {this.props.match.params.id}
                <iframe width="1650" height="600" src={info.vid_link}></iframe>
            </div>
        )
    }
}
