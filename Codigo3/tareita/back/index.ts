// importando las rutas

import { carro_router } from './api/routes/carro';
import { sequelize } from './api/config/sequelize';
import { registro_router } from './api/routes/registro';
import { auth_router } from './api/routes/auth';
import { NextFunction,Request,Response} from 'express';



var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configuracion de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 3500;

//configurando el cors
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Content-type,Authorization');
    res.header('Access-Control-Allow-Methods','GET,POST');
    res.header('Allow','GET,POST');
    next();
});

//usando rutas importadas

app.use('/api', carro_router);
app.use('/api',registro_router);
app.use('',auth_router);



app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puesto "+ PUERTO);
    // force => true cada vez que el proyecto inicie,
    // se van a eliminar todas las tablas, contenido y relaciones
    // que tengan, para crearse nuevamente

    // force => false cada vez que el proyecto inicie,
    // no elimina nunguna tabla de la base de datos, sin embargo,
    // si tenemos una tabla recientemente creada
    //  la funcion sync, la crea en la base de datos
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con exito");
    }).catch((error: any) => {
        console.log(error)
        console.log("error al crear la base de datos");
    })
});

