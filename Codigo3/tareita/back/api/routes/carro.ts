// playas routes
import { carro_controller } from '../controllers/carro';
import { Router, Request, Response, NextFunction } from 'express';
import {wachiman} from '../utils/utils';
export var carro_router = Router();



carro_router.get('/car/:car_id', wachiman, carro_controller.getCarroById);
carro_router.get('/car', carro_controller.getAllCarros);