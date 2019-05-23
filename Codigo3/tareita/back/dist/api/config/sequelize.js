"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("../models/carro");
const registro_1 = require("./../models/registro");
const usuario_1 = require("../models/usuario");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('vautos', 'root', 'Virtu@l', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Carro = carro_1.carro_model(exports.sequelize);
exports.Registro = registro_1.registro_model(exports.sequelize);
exports.Usuario = usuario_1.usuario_model(exports.sequelize);
// en el modelo playa servicio va a crear un campo de nombre 'playa_id'
// este campo sera la clave foranea que una PlayaServicio con Playa
exports.Registro.belongsTo(exports.Carro, { foreignKey: 'car_id' });
exports.Carro.hasMany(exports.Registro, { foreignKey: 'car_id' });
exports.Registro.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.Registro, { foreignKey: 'usu_id' });
