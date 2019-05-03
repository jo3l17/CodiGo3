import {Request,Response, NextFunction} from 'express';
import { request } from 'https';

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//configuracion del bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let controladorGeneral = {
    prueba: (req:Request,res:Response)=>{
        // res.json({nombre:'Joel',apellido:'Valdez'});
        let miNomnbre = req.body.nombre;
        let miImagen = req.body.imagen;
        res.json({
            nombreRexibico:miNomnbre,
            imagenRecibida:miImagen,
        });
    },
    ejemplo: (req:Request,res:Response)=>{
        res.json({edad:20,
            talla:1.75});
    },
    getVehiculo:(req:Request,res:Response)=>{
        let id = req.params.vehiculo_id;
        res.json({
            id_recibido:id
        })
    },
    wachiman: (req:Request,res:Response,next:NextFunction)=>{
        let rol = req.body.rol;
        // 1 = administrador
        if(rol==1){
            //pasele joven
            next();
        }else{
            res.json({error:"no estas autorizado"})
        }
    },
    cambiarPassword:(req:Request,res:Response)=>{
        res.json({
            resultado:"contraseña cambiada!!!"
        });
    }
}

let controlador = (req:Request,res:Response)=>{
    res.json({nombre:'Jorge',
    apellido:'Garnica'});
}

app.get('/',controlador);
app.get('/prueba',controladorGeneral.prueba);
app.get('/ejemplito',controladorGeneral.ejemplo);

app.get('/traerVehiculo/:vehiculo_id',controladorGeneral.getVehiculo);

app.post('/cambiarPassword',controladorGeneral.wachiman,controladorGeneral.cambiarPassword);

app.listen(3000,function(){
    console.log("Servidor corriendo correctamente en el puesto 3000");
    
});