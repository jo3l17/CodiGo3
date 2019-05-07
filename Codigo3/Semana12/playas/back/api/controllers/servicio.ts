// SERVICIO CONTROLLER
import { Request, Response } from 'express';
import { Servicio } from './../config/sequelize';


export var servicio_controller = {
    getAll: (req: Request, res: Response) => {
        Servicio.findAll().then((servicios:any) => {
        // Codigo de prueba
            servicios.forEach((servicio:any) => {
                servicio.mostrarIdYNombre()
            });
        // Codigo de prueba
        let response = {
            messgae:"ok",
            content:servicios
        };
        res.status(200).json(response);
    }).catch((error:any) => {
        console.log(error);
    });
    },
    create:(req:Request,res:Response)=>{

        /*let{serv_nom,serv_desc} = req.body;
        let objServicio = {
            serv_nom,
            serv_desc
        };*/
        //otra manera
        // let serv_nom = req.body.serv_nom;
        // let serv_desc = req.body.serv_desc;

        Servicio.create(req.body/*objServicio*/).then((servicioCreado:any)=>{
            if(servicioCreado){
                let response = {
                    messgae:'created',
                    content:servicioCreado
                };
                res.status(201).json(response);
            }else{
                let response = {
                    message:'error',
                    content:null
                };
                res.status(500).json(response);
            }
        })
    },
    getById:(req:Request,res:Response)=>{
        let {serv_id} = req.params;

        Servicio.findByPk(serv_id).then((servicio:any)=>{
            if (servicio) {
                let response = {
                    message:'found',
                    content:servicio
                };
                res.status(200).json(response);
            }else{
                let response = {
                    message:'not found',
                    content:null
                };
                res.status(206).json(response);
            }
        })
    },
    delete:(req:Request,res:Response)=>{
        let {serv_id} = req.params;

        Servicio.destroy({where:{serv_id}}).then((servicio:any)=>{
            if (servicio) {
                let response = {
                    message:'deleted',
                    content:servicio
                };
                res.status(200).json(response);
            }else{
                let response = {
                    message:'not found',
                    content:null
                };
                res.status(206).json(response);
            }
        })
    },
    update:(req:Request,res:Response)=>{
        
        Servicio.update({serv_nom:req.body.serv_nom,serv_desc:req.body.serv_desc},{where:{serv_id:req.params.serv_id}}).then((servicioCreado:any)=>{
            if(servicioCreado){
                let response = {
                    messgae:'modified',
                    content:servicioCreado
                };
                res.status(200).json(response);
            }else{
                let response = {
                    message:'no hay ese registro',
                    content:null
                };
                res.status(512).json(response);
            }
        })
    }
    
}