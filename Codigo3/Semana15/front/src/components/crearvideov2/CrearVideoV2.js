import React, { Component } from 'react'
import './CrearVideo.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class CrearVideoV2 extends Component {


    nomRef;
    descRef;
    linkRef;
    videoRef;
    constructor(props) {
        super(props)
        this.nomRef = React.createRef();
        this.descRef = React.createRef();
        this.linkRef = React.createRef();
        this.videoRef = React.createRef();
        this.state = {
            open: false,
            idVideoCreado: 0
        }
    }

    handleClick = () => {
        // this.setOpen(true);
        this.setState({
            open: true
        })
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        // this.setOpen(false);
        this.setState({
            open: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formulario = e.target;
        let objVideo = {
            vid_titu: this.nomRef.value,
            vid_desc: this.descRef.value,
            vid_link: this.linkRef.value,
        }
        let headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objVideo)
        };
        console.log(this.videoRef.current.files[0]);
        // crear una variable en codigo
        var formData = new FormData();
        formData.append('archivo',
            this.videoRef.current.files[0],
            this.videoRef.current.files[0].name);

        fetch('http://localhost:3700/api/video', headers).then(response => {
            return response.json();
        }).then(data => {
            if (data.message === 'created') {
                let headersVideo = {
                    method: 'POST',
                    body: formData
                };
                fetch(`http://localhost:3700/api/video/upload/${data.content._id}`, headersVideo)
                    .then(response2 => {
                        return response2.json();
                    })
                    .then(data2 => {
                        if (data2.message === "updated") {
                            // console.log(data2);
                            formulario.reset();
                            // e.target.reset();
                            // this.setState({ open: true });
                            this.handleClick();
                            this.setState({
                                idVideoCreado: data2.content._id
                            })
                        } else {
                            console.log("Error");
                        }
                    })
            }
        })
    }
    // handleUndo = () => {
    //     let headers = {
    //         method: 'POST'
    //     };
    //     fetch(`http://localhost:3700/api/video/delete/${this.state.idVideoCreado}`, headers)
    //         .then(respuestaDeshacer => {
    //             return respuestaDeshacer.json();
    //         })
    //         .then(data3 => {
    //             if (data3.message === "borrado") {
    //                 this.handleClose();
    //             } else {
    //                 console.log("Error")
    //             }
    //         })
    // }
    handleUndo = () => {
        let headers = {
            method: 'DELETE'
        };
        fetch(`http://localhost:3700/api/video/${this.state.idVideoCreado}`, headers)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(data => {
                if (data.message === "borrado") {
                    this.handleClose();
                } else {
                    console.log("Error")
                }
            })
    }


    render() {
        return (
            <React.Fragment>
                <form noValidate autoComplete="off" className="formulario" onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-helperText"
                        label="Nombre"
                        placeholder="Ejm: 05 - Introducción a Angular 8"
                        className="textField"
                        helperText="Ingrese el nombre del Video"
                        margin="normal"
                        inputRef={input => { this.nomRef = input }}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Descripcion"
                        multiline
                        placeholder="Descripcion"
                        className="textField"
                        margin="normal"
                        inputRef={input => { this.descRef = input }}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Link"
                        multiline
                        placeholder="Descripcion"
                        helperText="Ingrese el link del video"
                        className="textField"
                        margin="normal"
                        inputRef={input => { this.linkRef = input }}
                    />
                    <Button variant="contained" component="label" className="textField">
                        Subir Imagen del Video
                    <input type="file" style={{ display: "none" }} ref={this.videoRef} />
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        subir video
                    </Button>
                </form>
                <Snackbar
                    // style={{
                    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    //     borderRadius: 3,
                    //     border: 0,
                    //     color: 'white',
                    //     height: 48,
                    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    // }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={8000}
                    onClose={this.handleClose}
                    // onClose={()=>{this.setState({open:false})}}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Video Subido Exitosamente</span>}
                    action={[
                        // <Button key="undo" color="secondary" size="small" onClick={()=>{this.setState({open:false})}}>
                        <Button key="undo" color="secondary" size="small" onClick={this.handleUndo}>
                            Deshacer
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            style={{
                                padding: 0.5
                            }}
                            // className={classes.close}
                            onClick={this.handleClose}
                        // onClick={()=>{this.setState({open:false})}}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </React.Fragment>
        );
    }
}

