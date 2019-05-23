"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pendiente cambiar tipos any
const sequelize_1 = require("sequelize");
exports.playa_model = (sequelize) => {
    var car_model = sequelize.define('t_playa', {
        playa_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        car_mod: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        car_marca: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        car_año: {
            type: sequelize_1.DataTypes.STRING(4),
            allowNull: false
        },
        car_precio: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        car_est: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_playa'
    });
    // aqui se declaran las funcions de Modelo o de la clase
    return exports.playa_model;
};
