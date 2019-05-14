import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';



export interface PeriodicElement {
  playa_id: number;
  playa_nom: string;
  playa_dir: string;
  lib: number;
  ocu: number;
  tot: number;
}

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlayasComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  playasList:any;

  paginator;
  @ViewChild(MatPaginator) set matSort(content: MatPaginator) {
    this.paginator = content;
    if (this.paginator){
      this.playas.paginator = this.paginator;
    }
  }
  sort;
  @ViewChild(MatSort) set content(content: MatSort) {
    this.sort = content;
    if (this.sort){
      this.playas.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['playa_id', 'playa_nom', 'tot', 'lib', 'ocu'];
  playas;
  constructor(private _sPlaya: PlayaService) {
    
  }
  // ELEMENT_DATA: PeriodicElement[] = this._sPlaya.playasRetorno;

  // playas = new MatTableDataSource(this.ELEMENT_DATA);

  
  // columnsToDisplay = ['playa_id', 'playa_nom','playa_dir', 'lib', 'ocu', 'tot'];
  expandedElement: PeriodicElement | null;

  ngOnInit() {
    this.setPlayasList()
  }
  setPlayasList(){
    this._sPlaya.getPlayas().subscribe((playas:any)=>{
      // iterando el contenido de las playas [content]
      playas.content.forEach((playa)=>{
        // 'playa' => es un elemento playa
        // creamos 3 variables en cada iteracion (para cada playa)
        let total,libres,ocupados = 0;
        // calculamos el total del arreglo de nombre t_slotplayas de cada elemento
        total = playa.t_slotplayas.length;
        // calculamos el total de slots libre
        libres = playa.t_slotplayas.filter(slot=>slot.slotp_est==0).length;
        // calculamos el total de slots ocupados
        ocupados = playa.t_slotplayas.filter(slot=>slot.slotp_est==1).length;
        // asignando 3 nuevas propiedades al objeto playa
        playa.tot = total;
        playa.lib = libres;
        playa.ocu = ocupados;
      });
      this.playasList = playas.content;
      this.playas = new MatTableDataSource(this.playasList);
      console.log(this.playasList);
    });
  }
  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();
    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }
}
