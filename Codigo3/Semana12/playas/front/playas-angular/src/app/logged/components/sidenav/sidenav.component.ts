import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher:MediaQueryList = matchMedia('(max-width:720px)');
  constructor() { }

  ngOnInit() {
  }
  
  /*receptor($event){
    console.log($event);
    
  }*/

  pantallaSmall(){
    // mediaMatcher returna true si la pantalla es menor a 720 pixeles
    return this.mediaMatcher.matches;
  }
  // nose(){
  //   console.log("nel")
  // }

}
