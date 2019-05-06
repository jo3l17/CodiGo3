import { Sequelize, DataTypes } from 'sequelize';
export var usuario_model = (sequelize: Sequelize) => {
    var usuario_model = sequelize.define('t_usuario',
        {
            usu_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usu_email:{
                type: DataTypes.STRING(50),
                allowNull: false
            },
            usu_hash: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            usu_salt: {
                type: DataTypes.TEXT
            },
            usu_rol: {
                type: DataTypes.STRING(1)
            },
            usu_nom: {
                type: DataTypes.STRING(100)
            },
            usu_ape: {
                type: DataTypes.STRING(100)
            },
            usu_tel: {
                type: DataTypes.STRING(50)
            }
        }, {
            timestamps: false, // para auditorias
            tableName: 't_usuario'
        });
        // Aqui se declaran las funciones de Modelo (o de clase)
    return usuario_model;

}