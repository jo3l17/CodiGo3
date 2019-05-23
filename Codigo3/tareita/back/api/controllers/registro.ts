// REGISTRO CONTROLLER
import { Request, Response } from 'express';
import { Registro, Carro } from '../config/sequelize';

var Sequelize = require('sequelize');
var moment = require('moment');

const Op = Sequelize.Op


export var registro_controller = {
    // Obtener todos los registros dado el id del slotPlaya
    getAllRegistrosByCarId: (req: Request, res: Response) => {
        const { car_id } = req.params;
        Registro.findAll({
            include:[{
                model:Carro,
                where:{
                    car_id:car_id
                }
            }]
        }).then((respuesta: any) => {
            res.send(respuesta);
        })
    },
    // Obtener todos los registros de un 'slotp_id'
    // dada una fecha :':dia'(Ejm:'2019-05-06')
    // Ejm de Ruta /registro/slot /:slotp_id/fecha/:dia
    getAllRegByDateBySlotId: (req: Request, res: Response) => {
        const { car_id, dia } = req.params;
        //calcular fecha actual
        const actual = moment().format(`${dia} 00:00:00`);
        console.log('actual');
        console.log(actual);
        // calcular fecha actual mas un dia
        const tomorrow = moment(actual).add(1, 'days').format('YYYY-MM-DD HH:mm:ss')
        console.log(tomorrow);
        Registro.findAll({
            where:{
                reg_fech:{
                    [Op.gte]: actual,
                    [Op.lt]:  tomorrow,
                }
            },
            include:[{
                model:Carro,
                where:{
                    car_id:car_id
                }
            }]
        }).then((respuesta: any) => {
            res.send(respuesta)
        })
    }
}