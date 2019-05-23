"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// playas routes
const carro_1 = require("../controllers/carro");
const express_1 = require("express");
const utils_1 = require("../utils/utils");
exports.carro_router = express_1.Router();
exports.carro_router.get('/car/:car_id', utils_1.wachiman, carro_1.carro_controller.getCarroById);
exports.carro_router.get('/car', carro_1.carro_controller.getAllCarros);
