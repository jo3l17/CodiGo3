"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Pendiente cambiar tipo any
const sequelize_1 = require("sequelize");
exports.slotPlaya_model = (sequelize) => {
    var slotPlaya_model = sequelize.define('t_slotplaya', {
        slotp_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        slotp_nro: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        slotp_est: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 't_slotplaya'
    });
    // Aqui se declaran las funciones de Modelo(o de clase)
    return slotPlaya_model;
};
