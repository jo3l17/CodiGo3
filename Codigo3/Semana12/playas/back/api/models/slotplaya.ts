// Pendiente cambiar tipo any
import {Sequelize, DataTypes} from 'sequelize';

export var slotPlaya_model = (sequelize:Sequelize)=>{

    var slotPlaya_model = sequelize.define('t_slotplaya',
    {
        slotp_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false,
        },
        slotp_nro:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        slotp_est:{
            type: DataTypes.STRING(1),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'t_slotplaya'
    }
    
    );

    // Aqui se declaran las funciones de Modelo(o de clase)

    return slotPlaya_model;
};