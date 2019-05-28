"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../models/usuario");
const mongoose_1 = __importDefault(require("mongoose"));
// var mongoose = require('mongoose');
exports.Usuario = mongoose_1.default.model('usuario', usuario_1.usuarioSchema);
