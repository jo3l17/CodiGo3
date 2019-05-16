import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import {Response,Request,NextFunction} from 'express';
import { Clientes } from './clientes';
import { Cliente } from './cliente';

export default class Server {

    public app: express.Application;
    public puerto: any;
    public httpServer:http.Server;
    public io:socketIO.Server;
    public clientes:Clientes=new Clientes();

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
            let objCliente = new Cliente(cliente.id);
            this.clientes.add(objCliente);
            console.log("nueva lista de conectados");
            console.log(this.clientes.getClientes());
            
            cliente.on('disconnect',()=>{
                console.log(`el cliente ${cliente.id} se desconecto`);
                this.clientes.remove(cliente.id);
            });
        });
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