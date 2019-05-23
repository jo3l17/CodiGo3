"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
exports.verificarToken = (token) => {
    try {
        let data = jwt.verify(token, 'sape', { algorithm: 'RS256' });
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.wachiman = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        //imprime el token
        console.log(token);
        let resultado = exports.verificarToken(token);
        if (resultado) {
            next();
        }
        else {
            let response = {
                message: 'error',
                content: 'Error en el token'
            };
            res.status(500).json(response);
        }
    }
    else {
        let response = {
            message: 'unauthorize',
            content: 'No esta autorizado para realizar la solicitud'
        };
        res.status(401).json(response);
    }
    //console.log(req.headers.authorization);
    // res.send('un ratito')
};
