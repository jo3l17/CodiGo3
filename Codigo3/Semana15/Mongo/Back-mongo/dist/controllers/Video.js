"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
exports.video_controller = {
    getAll: (req, res) => {
        mongoose_1.Video.find((error, response) => {
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
        let objVideo = new mongoose_1.Video(req.body);
        //objUsuario = req.body;
        objVideo.save(function (error, videoCreado) {
            if (error) {
                res.status(500).json({
                    error: error
                });
            }
            else {
                res.status(201).json({
                    message: "created",
                    content: videoCreado
                });
            }
        });
        console.log(objVideo);
    }
};
