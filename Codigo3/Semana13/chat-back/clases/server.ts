import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import {Response,Request,NextFunction} from 'express';

export default class Server {

    public app: express.Application;
    public puerto: any;
    public httpServer:http.Server;
    public io:socketIO.Server;

    constructor() {
        this.app = express();
        this.app.use((req:Request,res:Response,next:NextFunction)=>{
            res.header('Access-Control-Allow-Origin','http://localhost:4200');
            res.header('Access-Control-Allow-Headers','Content-type,Authorization');
            res.header('Access-Control-Allow-Methods','GET,POST');
            res.header('Allow','GET,POST');
            next();
        });
        
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
            console.log(cliente.id);
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