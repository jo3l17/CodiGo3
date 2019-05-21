"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
            res.header('Access-Control-Allow-Methods', 'GET,POST');
            res.header('Allow', 'GET,POST');
            next();
        });
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();
        this.escucharSockets();
    }
    configurarBodyParser() {
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    escucharSockets() {
        console.log("Ecuchando los sockets");
        this.io.on('connect', (cliente) => {
            console.log("Uy!, alguien se conecto");
            console.log(cliente.id);
            cliente.on('disconnect', () => {
                console.log(`el cliente ${cliente.id} se desconecto`);
            });
        });
    }
    asignarRutas() {
        this.app.get('/', (req, res) => {
            res.send("buenas");
        });
    }
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("servidor corriendo exitosamente en el puerto " + this.puerto);
        });
    }
}
exports.default = Server;
