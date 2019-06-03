// video router
import {video_controller} from '../controllers/Video';
import {Router} from 'express';

var multipart = require('connect-multiparty');
var multipartMiddlewate = multipart({uploadDir:'./imagenes'})

export var video_router = Router();
video_router.post('/video',video_controller.create);
video_router.get('/video',video_controller.getAll);
video_router.post('/video/create',video_controller.create);
video_router.post('/video/upload/:id',multipartMiddlewate,video_controller.uploadImage)