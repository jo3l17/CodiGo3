// pendiente cambiar tipos any
import {Sequelize,DataTypes} from 'sequelize';
import { type } from 'os';

export var carro_model = (sequelize:Sequelize)=>{
    var carro_model = sequelize.define('t_car',{
        car_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        car_mod:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        car_marca:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        car_año:{
            type:DataTypes.STRING(4),
            allowNull:false
        },
        car_precio:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:false
        },
        car_est:{
            type:DataTypes.STRING(1),
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_car'
    });
    // aqui se declaran las funcions de Modelo o de la clase

    return carro_model;
}