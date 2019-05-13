import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayaService {
  playasRetorno;
  constructor(private _http:HttpClient) { }
  getPlayas(){
    this._http.get('http://localhost:3000/api/playa').subscribe((playas:any)=>{
      playas.content.forEach((playa)=>{
        // 'playa' => es un elemento playa
        // creamos 3 variables en cada iteracion (para cada playaa)
        let total,libres,ocupados = 0;
        // calculamos el total del arreglo de nombre t_slotplayas de cada elemento
        total = playa.t_slotplayas.length;
        // calculamos el total de nichos libres
        ocupados = playa.t_slotplayas.filter(slot=>slot.slotp_est == 1).length;
        // calculamos el total de nichos ocupados
        libres = playa.t_slotplayas.filter(slot=>slot.slotp_est == 0).length;
        // asignando 3 nuevas propiedades al objeto playa
        playa.total = total;
        playa.libres = libres;
        playa.ocupados = ocupados;
      });
      // console.log(playas);
      this.playasRetorno = playas;
    });
  }
}
