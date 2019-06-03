// usuario controller
import { Request, Response } from 'express';
import { Video } from '../config/mongoose';

export var video_controller = {
    getAll: (req: Request, res: Response) => {
        Video.find((error,response)=>{
            if(error){
                res.status(500).json({
                    error:"error en el servidor"
                });
            }else{
                res.status(200).json({
                    content:response,
                    message:"ok"
                })
            }
        })
    },
    create:(req:Request,res:Response)=>{
        let objVideo = new Video(req.body);
        //objUsuario = req.body;
        objVideo.save(function(error,videoCreado){
            if (error) {
                res.status(500).json({
                    error:error
                });
            }else{
                res.status(201).json({
                    message:"created",
                    content:videoCreado
                })
            }
        })
        console.log(objVideo);
    },
    uploadImage:(req:Request,res:Response)=>{
        let {id} = req.params;
        if(req.files){
            // archivo => nombre del campo recibido por POSTMAN
            let ruta = req.files.archivo.path;
            let nombreYExtension=ruta.split('\\')[1];
            Video.findByIdAndUpdate(id,{vid_img:nombreYExtension},{new:true},(err,respuesta)=>{
                if(!err){
                    res.status(200).json({message:'updated',content:respuesta})
                }else{
                    res.status(500).json({message:'error siñorsh',error:err})
                }
            })
            
        }else{
            return res.status(200).send({message:"no has seleccionado ningun archivo"})
        }
    },
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