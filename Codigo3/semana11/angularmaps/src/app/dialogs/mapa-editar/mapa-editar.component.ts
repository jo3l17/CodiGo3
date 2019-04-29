import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { Marcador } from './../../components/models/marcador';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {
  objMarcador:Marcador;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public miReferencia:MatDialogRef<MapaEditarComponent>) {
    console.log(data);
    this.objMarcador = data.marcador;
  }

  ngOnInit() {
  }
  cancelar(){
    this.miReferencia.close();
  }
  guardarCambios(titulo,descripcion){
    let objRespuesta ={
      titulo,
      descripcion
    }
    this.miReferencia.close(objRespuesta);
  }
}
