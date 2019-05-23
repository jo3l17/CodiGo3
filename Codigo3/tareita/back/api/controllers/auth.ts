// AUTH controller
import { Request, Response } from 'express';
import { Usuario } from '../config/sequelize';
export var auth_controller = {
    /**
     * Funcion para registrar un usuario
     * se recibn los parametros del body metodo POST
     */
    register: (req: Request, res: Response) => {

        Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((usuarios: any) => {
            if (usuarios.length === 0) {
                // instanciando un objeto del modelo Usuario
                let objUsuario = Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then((usuarioCreado: any) => {
                    let token = usuarioCreado.generateJWT();
                    if (usuarioCreado && token) {
                        let response = {
                            message: 'created',
                            token: token
                        };
                        res.status(201).json(response);
                    } else {
                        let response = {
                            message: 'error',
                            content: 'Error al crear el usuario y/o token'
                        };
                        res.status(500).json(response);
                    }
                    /*console.log("//////usuario///////");
                    console.log(usuarioCreado);
                    console.log("///////TOKEN////////");
                    console.log(token);*/
                })
                // console.log(objUsuario);
                // res.send("un ratito");
            }else{
                let response={
                    message:'error',
                    content:`el usuario con email ${req.body.usu_email} ya existe`
                };
                res.status(500).json(response);
            }
        })
    },
    login:(req: Request, res: Response) => {
        let {usu_email,usu_pass} = req.body;
        Usuario.findOne({
            where:{
                usu_email:usu_email
            }
        }).then((objUsuario:any)=>{
            if(objUsuario){
                // el usuario existe => validar la contra
                let valid = objUsuario.validPassword(usu_pass);
                console.log(valid);
                if (valid) {
                    // contraseña correcta
                    let token = objUsuario.generateJWT();
                    let response={
                        message:'ok',
                        token:token
                    };
                    res.status(200).json(response);
                }else{
                    //contraseña incorrecta
                    let response={
                        message:'error',
                        content:'Usuario o password incorrecto'
                    };
                    res.status(500).json(response);
                }
            }else{
                // si es null
                let response={
                    message:'error',
                    content:'Usuario o password incorrecto'
                };
                res.status(500).json(response);
            }
        })
    }
}