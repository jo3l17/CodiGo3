"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.usuario_model = (sequelize) => {
    var usuario_model = sequelize.define('t_usuario', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT
        },
        usu_rol: {
            type: sequelize_1.DataTypes.STRING(1)
        },
        usu_nom: {
            type: sequelize_1.DataTypes.STRING(100)
        },
        usu_ape: {
            type: sequelize_1.DataTypes.STRING(100)
        },
        usu_tel: {
            type: sequelize_1.DataTypes.STRING(50)
        }
    }, {
        timestamps: false,
        tableName: 't_usuario'
    });
    // Aqui se declaran las funciones de Modelo (o de clase)
    return usuario_model;
};
