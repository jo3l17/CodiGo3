"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pendiente cambiar tipos any
const sequelize_1 = require("sequelize");
exports.registro_model = (sequelize) => {
    var registro_model = sequelize.define('t_registro', {
        reg_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        reg_fechin: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        reg_fechfin: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        reg_est: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        reg_monto: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: true
        },
    }, {
        timestamps: false,
        tableName: 't_registro'
    });
    // Aquí se declaran las funciones de Modelo(o de clase)
    return registro_model;
};
