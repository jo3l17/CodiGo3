// usuario controller
import { Request, Response, response } from 'express';
import { Video } from '../config/mongoose';

// file system=> libreria para manejar archivos
var fs = require('fs');
// path module => 
var path_module = require('path')

export var video_controller = {
    getAll: (req: Request, res: Response) => {
        Video.find((error, response) => {
            if (error) {
                res.status(500).json({
                    error: "error en el servidor"
                });
            } else {
                res.status(200).json({
                    content: response,
                    message: "ok"
                })
            }
        })
    },
    create: (req: Request, res: Response) => {
        let objVideo = new Video(req.body);
        //objUsuario = req.body;
        objVideo.save(function (error, videoCreado) {
            if (error) {
                res.status(500).json({
                    error: error
                });
            } else {
                res.status(201).json({
                    message: "created",
                    content: videoCreado
                })
            }
        })
        console.log(objVideo);
    },
    uploadImage: (req: Request, res: Response) => {
        let { id } = req.params;
        if (req.files) {
            // archivo => nombre del campo recibido por POSTMAN
            let ruta = req.files.archivo.path;
            let nombreYExtension = ruta.split('\\')[1];
            Video.findByIdAndUpdate(id, { vid_img: nombreYExtension }, { new: true }, (err, respuesta) => {
                if (!err) {
                    res.status(200).json({ message: 'updated', content: respuesta })
                } else {
                    res.status(500).json({ message: 'error al actualizar', error: err })
                }
            })

        } else {
            return res.status(200).send({ message: "no has seleccionado ningun archivo" })
        }
    },
    deleteVideoById: (req: Request, res: Response) => {
        let { id } = req.params;
        Video.findByIdAndDelete(id, (err, objVideo) => {
            if (!err && objVideo) {
                // eliminar el archivo del video
                fs.unlink(`./imagenes/${objVideo.vid_img}`, (err: any) => {
                    if (!err) {
                        res.status(200).json({ message: 'borrado', content: objVideo })
                    } else {
                        res.status(500).json({ message: 'error al borrar el archivo de video', error: err })
                    }
                })
            } else {
                res.status(500).json({ message: 'error al borrar el video', error: err })
            }
        })
    },
    getImagenByName: (req: Request, res: Response) => {
        let ruta = `imagenes/${req.params.name}`;
        let rutaDefault = `imagenes/default.png`
        if (fs.existsSync(ruta)) {
            return res.sendFile(path_module.resolve(ruta));
        } else {
            return res.sendFile(path_module.resolve(rutaDefault))
        }
    },
    getVideoById: (req: Request, res: Response) => {
        let { id } = req.params;
        Video.findById(id, (err, objVideo) => {
            if (!err) {
                res.status(200).json({ message: 'borrado', content: objVideo });
            } else {
                res.status(500).json({ message: 'error al borrar el video', error: err })
            }
        })
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
}