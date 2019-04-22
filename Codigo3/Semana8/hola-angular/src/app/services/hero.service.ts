import { Injectable } from '@angular/core';
// import { Hero } from './../models/hero';
import { HEROES } from './../seeders/seeder-heroes';
// import { resolve } from 'dns';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private _sLog:LogService) { }


  getHeroes():Promise<any>{
    this._sLog.addLog("Se Han Obtenido los Heroes" + new Date());
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(HEROES);
      },2000);
    })
  }

}
