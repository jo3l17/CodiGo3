// pendiente cambiar tipos any
import {Sequelize,DataTypes} from 'sequelize';
import { type } from 'os';

export var playaservicio_model = (sequelize:Sequelize)=>{
    var playaservicio_model = sequelize.define('t_playaservicio',{
        playaserv_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        playaserv_cost:{
            type:DataTypes.DECIMAL(5,2),
            allowNull:false
        },
    },
    {
        timestamps:false,
        tableName:'t_playaservicio'
    });
    // aqui se declaran las funcions de Modelo o de la clase

    return playaservicio_model;
}