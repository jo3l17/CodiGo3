"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pendiente cambiar tipos any
const sequelize_1 = require("sequelize");
exports.playaservicio_model = (sequelize) => {
    var playaservicio_model = sequelize.define('t_playaservicio', {
        playaserv_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        playaserv_cost: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: 't_playaservicio'
    });
    // aqui se declaran las funcions de Modelo o de la clase
    return playaservicio_model;
};
