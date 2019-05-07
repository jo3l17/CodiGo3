"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.auth_controller = {
    /**
     * Funcion para registrar un usuario
     * se recibn los parametros del body metodo POST
     */
    register: (req, res) => {
        sequelize_1.Usuario.findAll({
            where: {
                usu_email: req.body.usu_email
            }
        }).then((usuarios) => {
            if (usuarios.length === 0) {
                // instanciando un objeto del modelo Usuario
                let objUsuario = sequelize_1.Usuario.build(req.body);
                objUsuario.setSaltAndHash(req.body.usu_pass);
                objUsuario.save().then((usuarioCreado) => {
                    let token = usuarioCreado.generateJWT();
                    if (usuarioCreado && token) {
                        let response = {
                            message: 'created',
                            token: token
                        };
                        res.status(201).json(response);
                    }
                    else {
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
                });
                // console.log(objUsuario);
                // res.send("un ratito");
            }
            else {
                let response = {
                    message: 'error',
                    content: `el usuario con email ${req.body.usu_email} ya existe`
                };
                res.status(500).json(response);
            }
        });
    },
    login: (req, res) => {
        let { usu_email, usu_pass } = req.body;
        sequelize_1.Usuario.findOne({
            where: {
                usu_email: usu_email
            }
        }).then((objUsuario) => {
            if (objUsuario) {
                // el usuario existe => validar la contra
                let valid = objUsuario.validPassword(usu_pass);
                console.log(valid);
                if (valid) {
                    // contraseña correcta
                    let token = objUsuario.generateJWT();
                    let response = {
                        message: 'ok',
                        token: token
                    };
                    res.status(200).json(response);
                }
                else {
                    //contraseña incorrecta
                    let response = {
                        message: 'error',
                        content: 'Usuario o password incorrecto'
                    };
                    res.status(500).json(response);
                }
            }
            else {
                // si es null
                let response = {
                    message: 'error',
                    content: 'Usuario o password incorrecto'
                };
                res.status(500).json(response);
            }
        });
    }
};
