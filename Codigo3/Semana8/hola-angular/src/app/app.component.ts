import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector dentro del index.html en la carpeta src
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Habla mundo';
}
