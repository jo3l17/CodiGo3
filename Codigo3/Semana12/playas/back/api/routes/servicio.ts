// servicio routes
import {servicio_controller} from './../controllers/servicio';
import {Router} from 'express';
export var servicio_router = Router();
servicio_router.get('/servicio',servicio_controller.getAll);
servicio_router.post('/servicio/crear',servicio_controller.create);
servicio_router.get('/servicio/:serv_id',servicio_controller.getById);
servicio_router.get('/servicio/delete/:serv_id',servicio_controller.delete);
servicio_router.post('/servicio/update/:serv_id',servicio_controller.update);