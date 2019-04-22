import { Injectable } from '@angular/core';
interface iLogs{
  /**
   * Funcion que recibe un log y lo arregloa al arreglo de logs
   * @param log Log que recibe la funcion
   */
  addLog(log:String):void;
  /**
   * Funcion que limpia o borra a todos los logs del arreglo de logs
   */
  clear():void;
}

@Injectable({
  providedIn: 'root'
})
export class LogService implements iLogs{

  logs:Array<String> = [];

  constructor() { }

  // crear funcion  que reciba un string
  // que agrege el string al arreglo de logs
  addLog(log:String):void{
    this.logs.push(log);
  }
  
  clear():void{
    this.logs = [];
  }
}
