"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicio_1 = require("./../models/servicio");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('playas', 'root', 'Virtu@l', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Servicio = servicio_1.servicio_model(exports.sequelize);
