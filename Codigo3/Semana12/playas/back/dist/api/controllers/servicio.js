"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.servicio_controller = {
    getAll: (req, res) => {
        sequelize_1.Servicio.findAll().then((servicios) => {
            //console.log(servicios);
            let response = {
                messgae: "ok",
                content: servicios
            };
            res.status(200).json(response);
        }).catch((error) => {
            console.log(error);
        });
    },
    create: (req, res) => {
        /*let{serv_nomb,serv_desc} = req.body;
        let objServicio = {
            serv_nomb,
            serv_desc
        };*/
        //otra manera
        // let serv_nom = req.body.serv_nom;
        // let serv_desc = req.body.serv_desc;
        sequelize_1.Servicio.create(req.body /*objServicio*/).then((servicioCreado) => {
            if (servicioCreado) {
                let response = {
                    messgae: 'created',
                    content: servicioCreado
                };
                res.status(201).json(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: null
                };
                res.status(500).json(response);
            }
        });
    },
    getById: (req, res) => {
        let { serv_id } = req.params;
        sequelize_1.Servicio.findByPk(serv_id).then((servicio) => {
            if (servicio) {
                let response = {
                    message: 'found',
                    content: servicio
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'not found',
                    content: null
                };
                res.status(206).json(response);
            }
        });
    },
    delete: (req, res) => {
        let { serv_id } = req.params;
        sequelize_1.Servicio.destroy({ where: { serv_id } }).then((servicio) => {
            if (servicio) {
                let response = {
                    message: 'deleted',
                    content: servicio
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'not found',
                    content: null
                };
                res.status(206).json(response);
            }
        });
    },
    update: (req, res) => {
        sequelize_1.Servicio.update({ serv_nomb: req.body.serv_nomb, serv_desc: req.body.serv_desc }, { where: { serv_id: req.params.serv_id } }).then((servicioCreado) => {
            if (servicioCreado) {
                let response = {
                    messgae: 'modified',
                    content: servicioCreado
                };
                res.status(200).json(response);
            }
            else {
                let response = {
                    message: 'no hay ese registro',
                    content: null
                };
                res.status(512).json(response);
            }
        });
    }
};
