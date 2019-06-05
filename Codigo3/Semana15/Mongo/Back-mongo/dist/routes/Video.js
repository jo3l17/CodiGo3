"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// video router
const Video_1 = require("../controllers/Video");
const express_1 = require("express");
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './imagenes' });
exports.video_router = express_1.Router();
exports.video_router.post('/video', Video_1.video_controller.create);
exports.video_router.get('/video', Video_1.video_controller.getAll);
exports.video_router.post('/video/create', Video_1.video_controller.create);
exports.video_router.post('/video/upload/:id', multipartMiddleware, Video_1.video_controller.uploadImage);
exports.video_router.post('/video/delete/:id', Video_1.video_controller.deleteVideoById);
exports.video_router.delete('/video/:id', Video_1.video_controller.deleteVideoById);
exports.video_router.get('/video/getimagenByName/:name', Video_1.video_controller.getImagenByName);
exports.video_router.get('/video/:id', Video_1.video_controller.getVideoById);
