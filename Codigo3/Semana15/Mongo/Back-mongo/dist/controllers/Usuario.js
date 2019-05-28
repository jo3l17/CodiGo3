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
    },
    create: (req, res) => {
        let objUsuario = new mongoose_1.Usuario(req.body);
        //objUsuario = req.body;
        objUsuario.save(function (error, usuarioCreado) {
            if (error) {
                res.status(500).json({
                    error: "error al crear usuario"
                });
            }
            else {
                res.status(201).json({
                    message: "created",
                    content: usuarioCreado
                });
            }
        });
        console.log(objUsuario);
    },
    erase: (req, res) => {
        let { usu_nom } = req.body;
        mongoose_1.Usuario.deleteOne({ usu_nom: usu_nom }, function (err) {
            if (err) {
                res.status(500).json({
                    error: "error al borrar usuario"
                });
            }
            else {
                res.status(201).json({
                    message: "erased",
                    content: mongoose_1.Usuario
                });
            }
        });
    },
    updatebyId: (req, res) => {
        mongoose_1.Usuario.findByIdAndUpdate(req.body._id, req.body, { new: true }, (error, actualizado) => {
            if (error) {
                res.status(500).json({
                    error: "error al actualizar usuario"
                });
            }
            else {
                res.status(200).json({
                    message: "actualizado",
                    content: actualizado
                });
            }
        });
    }
};
