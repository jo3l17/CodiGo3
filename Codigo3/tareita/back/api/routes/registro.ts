// REGISTRO ROUTER
import { registro_controller } from '../controllers/registro';
import { Router } from 'express';
export var registro_router = Router();
registro_router.get('/registro/:car_id/getall',
    registro_controller.getAllRegistrosByCarId);
registro_router.get('/registro/:car_id/fecha/:dia',
    registro_controller.getAllRegByDateBySlotId);