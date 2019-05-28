"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
exports.usuario_controller = {
    getAll: (req, res) => {
        mongoose_1.Usuario.find((error, response) => {
            if (error) {
                res.status(500).json({
                    error: "error en el servidor"
                });
            }
            else {
                res.status(200).json({
                    content: response,
                    message: "ok"
                });
            }
        });
    }
};
