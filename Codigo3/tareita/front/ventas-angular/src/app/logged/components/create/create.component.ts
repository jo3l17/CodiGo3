import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public chartType: string = 'bar';
  
  constructor(private _sCar:CarService) { }
  playas;
  playasList;
  ngOnInit() {
  }
  setPlayasList(){
    
    this._sCar.getPlayas().subscribe((carros:any)=>{
      // iterando el contenido de las playas [content]
      carros.content.forEach((playa)=>{
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
      this.playasList = carros.content;
      console.log(this.playasList);
    });
  }

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 90, 80,0], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Blue'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  
}