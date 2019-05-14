import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css']
})
export class PlayasComponent implements OnInit, AfterViewInit {


  sort;
  @ViewChild(MatSort) set matSort(content: MatSort) {
    this.sort = content;
    if (this.sort) {
      this.playas.sort = content;
    }
  }
  paginator;
  @ViewChild(MatPaginator) set matPaginator(content: MatPaginator) {
    this.paginator = content;
    if (this.paginator) {
      this.playas.paginator = content;
    }
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  playas = new MatTableDataSource(ELEMENT_DATA);
  constructor(private _sPlaya: PlayaService) {
    
  }


  ngOnInit() {
    this.playas.sort = this.sort;
    this.playas.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();
    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    
  }

}
