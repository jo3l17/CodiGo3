"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
// file system=> libreria para manejar archivos
var fs = require('fs');
// path module => 
var path_module = require('path');
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
    },
    uploadImage: (req, res) => {
        let { id } = req.params;
        if (req.files) {
            // archivo => nombre del campo recibido por POSTMAN
            let ruta = req.files.archivo.path;
            let nombreYExtension = ruta.split('\\')[1];
            mongoose_1.Video.findByIdAndUpdate(id, { vid_img: nombreYExtension }, { new: true }, (err, respuesta) => {
                if (!err) {
                    res.status(200).json({ message: 'updated', content: respuesta });
                }
                else {
                    res.status(500).json({ message: 'error al actualizar', error: err });
                }
            });
        }
        else {
            return res.status(200).send({ message: "no has seleccionado ningun archivo" });
        }
    },
    deleteVideoById: (req, res) => {
        let { id } = req.params;
        mongoose_1.Video.findByIdAndDelete(id, (err, objVideo) => {
            if (!err && objVideo) {
                // eliminar el archivo del video
                fs.unlink(`./imagenes/${objVideo.vid_img}`, (err) => {
                    if (!err) {
                        res.status(200).json({ message: 'borrado', content: objVideo });
                    }
                    else {
                        res.status(500).json({ message: 'error al borrar el archivo de video', error: err });
                    }
                });
            }
            else {
                res.status(500).json({ message: 'error al borrar el video', error: err });
            }
        });
    },
    getImagenByName: (req, res) => {
        let ruta = `imagenes/${req.params.name}`;
        let rutaDefault = `imagenes/default.png`;
        if (fs.existsSync(ruta)) {
            return res.sendFile(path_module.resolve(ruta));
        }
        else {
            return res.sendFile(path_module.resolve(rutaDefault));
        }
    },
    getVideoById: (req, res) => {
        let { id } = req.params;
        mongoose_1.Video.findById(id, (err, objVideo) => {
            if (!err) {
                res.status(200).json({ message: 'borrado', content: objVideo });
            }
            else {
                res.status(500).json({ message: 'error al borrar el video', error: err });
            }
        });
    }
    // create: (req: Request, res: Response) => {
    //     let objVideo: any = new Video();
    //     objVideo = req.body;
    //     Video.create(objVideo, function (error: any, VideoCreado: any) {
    //         if (error) {
    //             res.status(500).json({
    //                 message: 'Error',
    //                 error: error
    //             })
    //         } else {
    //             res.status(200).json({
    //                 message: 'Ok',
    //                 content: VideoCreado
    //             })
    //         }
    //     });
    // },
};
