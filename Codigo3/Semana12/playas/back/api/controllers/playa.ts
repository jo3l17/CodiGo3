// PLAYA CONTROLLER
import { Request, Response } from 'express';
import { Playa, sequelize } from './../config/sequelize';
import { SlotPlaya } from '../config/sequelize';
import { json } from 'body-parser';
import { slotPlaya_model } from '../models/slotplaya';

export var playa_controller = {
    getAllSlotsByPlayaId: (req: Request, res: Response) => {
        const { playa_id } = req.params;
        Playa.findAll({
            where: {
                playa_id: playa_id
            },
            include: [{
                model: SlotPlaya,
                /*where:{
                    slotp_est:0
                }*/
            }]
        }).then((respuesta: any) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        })

    },
    getAllPlayas: (req: Request, res: Response) => {
        Playa.findAll({
            include: [
                {
                    model: SlotPlaya,
                },
            ],
        }).then((respuesta: any) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        })
    }
}