// pendiente cambiar tipos any
import {Sequelize,DataTypes} from 'sequelize';
import { type } from 'os';

export var playa_model = (sequelize:Sequelize)=>{
    var playa_model = sequelize.define('t_playa',{
        playa_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        playa_nom:{
            type:DataTypes.STRING(45),
            allowNull:true
        },
        playa_lat:{
            type:DataTypes.DECIMAL(10,7),
            allowNull:false
        },
        playa_lng:{
            type:DataTypes.DECIMAL(10,7),
            allowNull:false
        },
        playa_dir:{
            type: DataTypes.TEXT,
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_playa'
    });
    // aqui se declaran las funcions de Modelo o de la clase

    return playa_model;
}