import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Marcador } from './../../components/models/marcador';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Marcador) { }

  ngOnInit() {
  }

}
