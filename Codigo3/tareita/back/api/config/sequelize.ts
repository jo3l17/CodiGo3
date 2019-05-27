import {carro_model} from '../models/carro';
import {registro_model} from './../models/registro';
import {usuario_model} from '../models/usuario';

const Sequelize = require('sequelize');

// export const sequelize = new Sequelize('vautos','root','Virtu@l',{
//     host:'localhost',
//     dialect: 'mysql',
//     timezone:'-05:00'
// })

export const sequelize = new Sequelize('NJdYCOsn8Q','NJdYCOsn8Q','4MhyeZxzKi',{
    host:'remotemysql.com',
    dialect: 'mysql',
    timezone:'-05:00'
})


export const Carro = carro_model(sequelize);

export const Registro = registro_model(sequelize);

export const Usuario = usuario_model(sequelize);


// en el modelo playa servicio va a crear un campo de nombre 'playa_id'
// este campo sera la clave foranea que una PlayaServicio con Playa

Registro.belongsTo(Carro,{foreignKey:'car_id'});
Carro.hasMany(Registro,{foreignKey:'car_id'})

Registro.belongsTo(Usuario,{foreignKey:'usu_id'});
Usuario.hasMany(Registro,{foreignKey:'usu_id'})