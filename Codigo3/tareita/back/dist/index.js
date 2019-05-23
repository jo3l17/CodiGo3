"use strict";
// importando las rutas
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./api/routes/carro");
const sequelize_1 = require("./api/config/sequelize");
const registro_1 = require("./api/routes/registro");
const auth_1 = require("./api/routes/auth");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// configuracion de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PUERTO = process.env.PORT || 3500;
//configurando el cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET,POST');
    next();
});
//usando rutas importadas
app.use('/api', carro_1.carro_router);
app.use('/api', registro_1.registro_router);
app.use('', auth_1.auth_router);
app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puesto " + PUERTO);
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
