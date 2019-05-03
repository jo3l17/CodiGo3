import {servicio_model} from './../models/servicio';
const Sequelize = require('sequelize');

export const sequelize = new Sequelize('playas','root','Virtu@l',{
    host:'localhost',
    dialect: 'mysql',
    timezone:'-05:00'
})

export const Servicio = servicio_model(sequelize);

