"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// playas routes
const carro_1 = require("./../controllers/carro");
const express_1 = require("express");
const utils_1 = require("../utils/utils");
exports.playa_router = express_1.Router();
exports.playa_router.get('/playa/:playa_id/getslots', utils_1.wachiman, carro_1.carro_controller.getCarroById);
exports.playa_router.get('/playa', carro_1.carro_controller.getAllCarros);
