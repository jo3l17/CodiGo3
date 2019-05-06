"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importando las rutas
const servicio_1 = require("./api/routes/servicio");
const playas_1 = require("./api/routes/playas");
const sequelize_1 = require("./api/config/sequelize");
const registro_1 = require("./api/routes/registro");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// configuracion de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PUERTO = process.env.PORT || 3000;
app.use('/api', servicio_1.servicio_router);
app.use('/api', playas_1.playa_router);
app.use('/api', registro_1.registro_router);
app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puesto 3000");
    // force => true cada vez que el proyecto inicie,
    // se van a eliminar todas las tablas, contenido y relaciones
    // que tengan, para crearse nuevamente
    // force => false cada vez que el proyecto inicie,
    // no elimina nunguna tabla de la base de datos, sin embargo,
    // si tenemos una tabla recientemente creada
    //  la funcion sync, la crea en la base de datos
    sequelize_1.sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con exito");
    }).catch((error) => {
        console.log(error);
        console.log("error al crear la base de datos");
    });
});
