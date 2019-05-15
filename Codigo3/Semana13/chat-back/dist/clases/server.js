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
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.puerto = process.env.PORT || 3700;
        this.asignarRutas();
        this.escucharSockets();
    }
    escucharSockets() {
        console.log("Ecuchando los sockets");
        this.io.on('connect', (cliente) => {
            console.log("Uy!, alguien se conecto");
            console.log(cliente);
        });
    }
    asignarRutas() {
        this.app.use('/', (req, res) => {
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
