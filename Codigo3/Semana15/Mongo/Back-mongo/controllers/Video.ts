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
    }
}