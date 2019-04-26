import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: []
})
export class DatatableComponent implements OnInit {

  observador:Subscription;
  restaurants:Array<any>;

  constructor(private _sHttp:HttpService) {
    console.log("--- Constructor ---");
  }

  ngOnInit() {
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
