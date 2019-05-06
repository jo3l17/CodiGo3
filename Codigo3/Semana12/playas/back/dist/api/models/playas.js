"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pendiente cambiar tipos any
const sequelize_1 = require("sequelize");
exports.playa_model = (sequelize) => {
    var playa_model = sequelize.define('t_playa', {
        playa_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        playa_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        playa_lat: {
            type: sequelize_1.DataTypes.DECIMAL(10, 7),
            allowNull: false
        },
        playa_lng: {
            type: sequelize_1.DataTypes.DECIMAL(10, 7),
            allowNull: false
        },
        playa_dir: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_playa'
    });
    // aqui se declaran las funcions de Modelo o de la clase
    return playa_model;
};
