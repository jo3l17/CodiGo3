// usuario router
import {usuario_controller} from '../controllers/Usuario';
import {Router} from 'express';
export var usuario_router = Router();
usuario_router.get('/usuario',usuario_controller.getAll);
usuario_router.post('/usuario/create',usuario_controller.create);
usuario_router.post('/usuario/delete',usuario_controller.erase);
usuario_router.put('/usuario/update',usuario_controller.updatebyId)
