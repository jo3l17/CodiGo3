"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usuario router
const Usuario_1 = require("../controllers/Usuario");
const express_1 = require("express");
exports.usuario_router = express_1.Router();
exports.usuario_router.get('/usuario', Usuario_1.usuario_controller.getAll);
exports.usuario_router.post('/usuario/create', Usuario_1.usuario_controller.create);
exports.usuario_router.post('/usuario/delete', Usuario_1.usuario_controller.erase);
exports.usuario_router.put('/usuario/update', Usuario_1.usuario_controller.updatebyId);
