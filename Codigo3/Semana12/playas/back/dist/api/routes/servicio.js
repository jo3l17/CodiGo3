"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// servicio routes
const servicio_1 = require("./../controllers/servicio");
const express_1 = require("express");
exports.servicio_router = express_1.Router();
exports.servicio_router.get('/servicio', servicio_1.servicio_controller.getAll);
exports.servicio_router.post('/servicio/crear', servicio_1.servicio_controller.create);
exports.servicio_router.get('/servicio/:serv_id', servicio_1.servicio_controller.getById);
exports.servicio_router.get('/servicio/delete/:serv_id', servicio_1.servicio_controller.delete);
exports.servicio_router.post('/servicio/update/:serv_id', servicio_1.servicio_controller.update);
