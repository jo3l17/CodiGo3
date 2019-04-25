import { Component, OnInit , OnDestroy} from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit,OnDestroy {

  observador:Subscription;
  restaurants:Array<any>;

  constructor(private _sHttp:HttpService) {
    console.log("--- Constructor ---");
  }

  ngOnInit() {
    // obteniendo data externa a travez de {fetch}
    /*this._sHttp.getRestaurants().then(respuesta=>{
      return respuesta.json()
    }).then(data=>{
      console.log(data);
    })*/
    console.log("--- ngOnInit ---");
    this.observador = this._sHttp.getRestaurants().subscribe(data=>{
      console.log(data);
      this.restaurants = data;
    });
  }
  ngOnDestroy(){
    console.log("--- ngOndestroy ---");
    this.observador.unsubscribe();
  }
}
