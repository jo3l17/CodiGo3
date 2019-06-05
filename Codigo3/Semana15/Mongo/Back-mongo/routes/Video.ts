// video router
import {video_controller} from '../controllers/Video';
import {Router} from 'express';

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./imagenes'})

export var video_router = Router();
video_router.post('/video',video_controller.create);
video_router.get('/video',video_controller.getAll);
video_router.post('/video/create',video_controller.create);
video_router.post('/video/upload/:id',multipartMiddleware,video_controller.uploadImage)
video_router.post('/video/delete/:id',video_controller.deleteVideoById);
video_router.delete('/video/:id',video_controller.deleteVideoById);
video_router.get('/video/getimagenByName/:name',video_controller.getImagenByName)
video_router.get('/video/:id',video_controller.getVideoById)