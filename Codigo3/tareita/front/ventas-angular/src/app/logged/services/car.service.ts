import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  get(arg0: string) {
    throw new Error("Method not implemented.");
  }

  playasRetorno;

  constructor(private _http:HttpClient) {
    this.getPlayas();
  }

  getPlayas(){
    return this._http.get('http://localhost:3000/api/playa')
  }
  getAutos(){
    return this._http.get('http://localhost:3500/api/car')
  }
}