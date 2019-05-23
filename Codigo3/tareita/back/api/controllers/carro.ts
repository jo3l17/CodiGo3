// PLAYA CONTROLLER
import { Request, Response } from 'express';
import { Carro, sequelize } from './../config/sequelize';

import { json } from 'body-parser';


export var carro_controller = {
    getCarroById: (req: Request, res: Response) => {
        const { car_id } = req.params;
        Carro.findAll({
            where: {
                car_id: car_id
            }
        }).then((respuesta: any) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        })
    },
    getAllCarros: (req: Request, res: Response) => {
        Carro.findAll().then((respuesta: any) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        })
    }
}