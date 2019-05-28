// usuario controller
import { Request, Response } from 'express';
import { Usuario } from '../config/mongoose';

export var usuario_controller = {
    
    getAll: (req: Request, res: Response) => {
        Usuario.find((error,response)=>{
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
        let objUsuario = new Usuario(req.body);
        //objUsuario = req.body;
        objUsuario.save(function(error,usuarioCreado){
            if (error) {
                res.status(500).json({
                    error:"error al crear usuario"
                });
            }else{
                res.status(201).json({
                    message:"created",
                    content:usuarioCreado
                })
            }
        })
        console.log(objUsuario);
    },
    erase:(req:Request,res:Response)=>{
        let {usu_nom}=req.body;
        Usuario.deleteOne({ usu_nom: usu_nom }, function (err) {
            if (err) {
                res.status(500).json({
                    error:"error al borrar usuario"
                });
            }else{
                res.status(201).json({
                    message:"erased",
                    content:Usuario
                })
            }
        });
    },
    updatebyId:(req:Request,res:Response)=>{
        Usuario.findByIdAndUpdate(req.body._id,req.body,{new:true},(error,actualizado) => {
            if (error) {
                res.status(500).json({
                    error:"error al actualizar usuario"
                });
            }else{
                res.status(200).json({
                    message:"actualizado",
                    content:actualizado
                })
            }
        })
    }
}