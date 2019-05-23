"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
var Sequelize = require('sequelize');
var moment = require('moment');
const Op = Sequelize.Op;
exports.registro_controller = {
    // Obtener todos los registros dado el id del slotPlaya
    getAllRegistrosByCarId: (req, res) => {
        const { car_id } = req.params;
        sequelize_1.Registro.findAll({
            include: [{
                    model: sequelize_1.Carro,
                    where: {
                        car_id: car_id
                    }
                }]
        }).then((respuesta) => {
            res.send(respuesta);
        });
    },
    // Obtener todos los registros de un 'slotp_id'
    // dada una fecha :':dia'(Ejm:'2019-05-06')
    // Ejm de Ruta /registro/slot /:slotp_id/fecha/:dia
    getAllRegByDateBySlotId: (req, res) => {
        const { car_id, dia } = req.params;
        //calcular fecha actual
        const actual = moment().format(`${dia} 00:00:00`);
        console.log('actual');
        console.log(actual);
        // calcular fecha actual mas un dia
        const tomorrow = moment(actual).add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
        console.log(tomorrow);
        sequelize_1.Registro.findAll({
            where: {
                reg_fech: {
                    [Op.gte]: actual,
                    [Op.lt]: tomorrow,
                }
            },
            include: [{
                    model: sequelize_1.Carro,
                    where: {
                        car_id: car_id
                    }
                }]
        }).then((respuesta) => {
            res.send(respuesta);
        });
    }
};
