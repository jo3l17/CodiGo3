import { Injectable } from '@angular/core';
import { Hero } from './../models/hero';
import { HEROES } from './../seeders/seeder-heroes';
// import { resolve } from 'dns';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private _sLog: LogService) { }


  getHeroes(): Promise<any> {
    this._sLog.addLog('Se Han Obtenido los Heroes' + new Date());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(HEROES);
      }, 2000);
    });
  }
  getHeroById(id:number):Promise<any> {
    return new Promise ((resolve,reject)=>{
      setTimeout(() => {
        this._sLog.addLog(`Se ha solicitado el heroe de id ${id} => ${new Date()}`);
        let heroeTmp = HEROES.filter((hero) => hero.id === id);
        resolve(heroeTmp[0]);
      }, 1500);
    })
  }
}
