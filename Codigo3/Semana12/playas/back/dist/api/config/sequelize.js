"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servicio_1 = require("./../models/servicio");
const playas_1 = require("./../models/playas");
const playaservicio_1 = require("./../models/playaservicio");
const registro_1 = require("./../models/registro");
const slotplaya_1 = require("./../models/slotplaya");
const usuario_1 = require("../models/usuario");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('playas', 'root', 'Virtu@l', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});
exports.Servicio = servicio_1.servicio_model(exports.sequelize);
exports.Playa = playas_1.playa_model(exports.sequelize);
exports.PlayaServicio = playaservicio_1.playaservicio_model(exports.sequelize);
exports.Registro = registro_1.registro_model(exports.sequelize);
exports.SlotPlaya = slotplaya_1.slotPlaya_model(exports.sequelize);
exports.usuario = usuario_1.usuario_model(exports.sequelize);
// en el modelo playa servicio va a crear un campo de nombre 'playa_id'
// este campo sera la clave foranea que una PlayaServicio con Playa
exports.PlayaServicio.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.PlayaServicio.belongsTo(exports.Servicio, { foreignKey: 'serv_id' });
exports.SlotPlaya.belongsTo(exports.Playa, { foreignKey: 'playa_id' });
exports.Playa.hasMany(exports.SlotPlaya, { foreignKey: 'playa_id' });
exports.Registro.belongsTo(exports.usuario, { foreignKey: 'usu_id' });
exports.SlotPlaya.hasMany(exports.Registro, { foreignKey: 'slotp_id' });
exports.Registro.belongsTo(exports.SlotPlaya, { foreignKey: 'slotp_id' });
