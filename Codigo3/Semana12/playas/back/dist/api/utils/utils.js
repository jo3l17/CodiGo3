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
