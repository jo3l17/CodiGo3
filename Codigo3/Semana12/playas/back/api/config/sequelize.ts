import {servicio_model} from './../models/servicio';
import {playa_model} from './../models/playas';
import {playaservicio_model } from './../models/playaservicio';
import {registro_model} from './../models/registro';
import {slotPlaya_model} from './../models/slotplaya';
import {usuario_model} from '../models/usuario';
const Sequelize = require('sequelize');

export const sequelize = new Sequelize('playas','root','Virtu@l',{
    host:'localhost',
    dialect: 'mysql',
    timezone:'-05:00'
})

export const Servicio = servicio_model(sequelize);
export const Playa = playa_model(sequelize);
export const PlayaServicio = playaservicio_model(sequelize);
export const Registro = registro_model(sequelize);
export const slotPlaya = slotPlaya_model(sequelize);
export const usuario = usuario_model(sequelize);


// en el modelo playa servicio va a crear un campo de nombre 'playa_id'
// este campo sera la clave foranea que una PlayaServicio con Playa
PlayaServicio.belongsTo(Playa,{foreignKey:'playa_id'});
PlayaServicio.belongsTo(Servicio,{foreignKey:'serv_id'});
slotPlaya.belongsTo(Playa,{foreignKey:'playa_id'})
Registro.belongsTo(usuario,{foreignKey:'usu_id'});
Registro.belongsTo(slotPlaya,{foreignKey:'slotp_id'})