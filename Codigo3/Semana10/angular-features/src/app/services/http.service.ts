import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {
    
  }

  getRestaurants():Observable<any>{
    let url = 'http://5cbf4ef106a6810014c664ec.mockapi.io/api/restaurant';
    // return fetch(url);
    return this._http.get(url);
  }
  createRestaurant(objRestaurant):Observable<any>{
    let url = 'http://5cbf4ef106a6810014c664ec.mockapi.io/api/restaurant';
    let objRestString = JSON.stringify(objRestaurant);
    let misCabeceras = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(url,objRestString,{headers:misCabeceras})
  }
}
