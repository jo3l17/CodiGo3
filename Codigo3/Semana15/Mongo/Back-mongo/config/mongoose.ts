import {usuarioSchema} from '../models/usuario';
import {videoSchema} from '../models/Video';
import mongoose from 'mongoose';
// var mongoose = require('mongoose');

export var Usuario = mongoose.model('usuario',usuarioSchema)
export var Video = mongoose.model('video',videoSchema)