import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: []
})
export class FormsComponent implements OnInit {

  objRestaurant = {
    Nombre: '',
    Imagen: ''
  }
  creado:Boolean;

  constructor(private _sHttp: HttpService, private _sToastr: ToastrService) { }

  ngOnInit() {
  }

  crearRestaurant(formulario){
    // console.log(this.objRestaurant);
    this._sHttp.createRestaurant(this.objRestaurant)
                .subscribe((data) => {
                  this.creado = true;
                  this._sToastr.success('Creado!', 'Restaurant creado exitosamente!',{timeOut:3000,positionClass:'toast-top-center'},
                  );
                  // console.log(data);
                },(error) => {
                  this.creado = false;
                  // console.log(error);
                });
    formulario.reset();
  }

}
