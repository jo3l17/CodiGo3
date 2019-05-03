// pendiente cambiar tipos any
import {Sequelize,DataTypes} from 'sequelize';

export var servicio_model = (sequelize:Sequelize)=>{
    var servicio_model = sequelize.define('t_servicio',{
        serv_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        serv_nomb:{
            type:DataTypes.STRING(50),
            allowNull:true
        },
        serv_desc:{
            type: DataTypes.TEXT,
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_servicio'
    });
    // aqui se declaran las funcions de Modelo o de la clase

    return servicio_model;
}