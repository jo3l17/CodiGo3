import { Component, OnInit } from '@angular/core';
import { Marcador } from '../models/marcador';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MapaEditarComponent} from './../../dialogs/mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title = 'angularmaps';
  lat: number = -16.4298504;
  lng: number = -71.5193987;

  marcadores: Array<Marcador> = [];

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) {
    // let objMarcador = new Marcador(-16.4298504,-71.5193447);
    // this.marcadores.push(objMarcador);
  }

  ngOnInit() {
  }
  agregarMarcador(evento){
    console.log(evento);
    let objMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(objMarcador);
  }
  eliminarMarcador(posicion){
    console.log(posicion);
    this.marcadores.splice(posicion,1);
    this.snackBar.open('marcador eliminado', 'cerrar', {
      duration: 2000,
    });
  }
  abriDialog(marcador: Marcador){
    this.dialog.open(MapaEditarComponent, {
      data: {
        marcador:marcador
      }
    });
  }
}
