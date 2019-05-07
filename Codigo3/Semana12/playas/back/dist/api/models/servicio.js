"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pendiente cambiar tipos any
const sequelize_1 = require("sequelize");
exports.servicio_model = (sequelize) => {
    var servicio_model = sequelize.define('t_servicio', {
        serv_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        serv_nom: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: true
        },
        serv_desc: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 't_servicio'
    });
    // aqui se declaran las funcions de Modelo o de la clase
    servicio_model.prototype.mostrarIdYNombre = () => {
        console.log(`ID => ${this.serv_id}`);
        console.log(`Nombre =>${this.serv_nom}`);
    };
    return servicio_model;
};
