"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.carro_controller = {
    getCarroById: (req, res) => {
        const { car_id } = req.params;
        sequelize_1.Carro.findAll({
            where: {
                car_id: car_id
            }
        }).then((respuesta) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        });
    },
    getAllCarros: (req, res) => {
        sequelize_1.Carro.findAll().then((respuesta) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        });
    }
};
