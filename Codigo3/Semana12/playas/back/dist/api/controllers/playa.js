"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
const sequelize_2 = require("../config/sequelize");
exports.playa_controller = {
    getAllSlotsByPlayaId: (req, res) => {
        const { playa_id } = req.params;
        sequelize_1.Playa.findAll({
            where: {
                playa_id: playa_id
            },
            include: [{
                    model: sequelize_2.SlotPlaya,
                    where: {
                        slotp_est: 0
                    }
                }]
        }).then((respuesta) => {
            let response = {
                message: 'ok',
                content: respuesta
            };
            res.status(200).json(response);
        });
    }
};
