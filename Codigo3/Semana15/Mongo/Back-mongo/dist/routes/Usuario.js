"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usuario router
const Usuario_1 = require("../controllers/Usuario");
const express_1 = require("express");
exports.usuario_router = express_1.Router();
exports.usuario_router.get('/usuario', Usuario_1.usuario_controller.getAll);
