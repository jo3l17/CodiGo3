import express from 'express';
import http from 'http';
import socketIO from 'socket.io';


export default class Server {

    public app: express.Application;
    public puerto: any;
    public httpServer:http.Server;
    public io:socketIO.Server;

    constructor() {
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.puerto = process.env.PORT || 3700;
        this.asignarRutas();
        this.escucharSockets()
    }
    escucharSockets(){
        console.log("Ecuchando los sockets");
        this.io.on('connect',(cliente)=>{
            console.log("Uy!, alguien se conecto");
            console.log(cliente);
        })
    }
    asignarRutas(){
        this.app.use('/',(req,res)=>{
            res.send("buenas");
        })
    }
    start() {
        this.httpServer.listen(this.puerto, () => {
            console.log("servidor corriendo exitosamente en el puerto "+this.puerto);
        })
    }

}