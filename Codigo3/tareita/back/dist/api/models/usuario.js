"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
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
        }
    }, {
        timestamps: false,
        tableName: 't_usuario'
    });
    // Aqui se declaran las funciones de Modelo (o de clase)
    usuario_model.prototype.setSaltAndHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        console.log(this.usu_salt);
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    usuario_model.prototype.validPassword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    usuario_model.prototype.generateJWT = function () {
        let payload = {
            usu_id: this.usu_id,
            usu_nom: `${this.usu_nom} ${this.usu_ape}`
        };
        var token = jwt.sign(payload, 'sape', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    return usuario_model;
};
