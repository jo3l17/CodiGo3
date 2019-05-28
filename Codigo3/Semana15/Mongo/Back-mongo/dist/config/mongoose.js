"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../models/usuario");
const Video_1 = require("../models/Video");
const mongoose_1 = __importDefault(require("mongoose"));
// var mongoose = require('mongoose');
exports.Usuario = mongoose_1.default.model('usuario', usuario_1.usuarioSchema);
exports.Video = mongoose_1.default.model('video', Video_1.videoSchema);
