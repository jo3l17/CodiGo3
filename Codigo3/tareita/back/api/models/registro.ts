// pendiente cambiar tipos any
import {Sequelize,DataTypes} from 'sequelize';



export var registro_model = (sequelize:Sequelize)=>{
    var registro_model = sequelize.define('t_registro',
    {
        reg_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        reg_fech:{
            type:DataTypes.DATE,
            allowNull:true
        }
    },
    {
        timestamps:false,
        tableName:'t_registro'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return registro_model;

}