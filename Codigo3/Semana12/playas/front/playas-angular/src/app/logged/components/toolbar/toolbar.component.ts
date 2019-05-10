import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  // emisor es un disparador de eventos
  // su funcion 'emit()' es escuchada por su padre
  // @Output() emisor = new EventEmitter<Object>();
  @Output() emisor = new EventEmitter<void>();


  // @Output() otroEmisor = new EventEmitter<void>();
  /**envia un JSON */
  // emitir(){
  //   this.emisor.emit({data:"saludo"})
  // }
  emitir(){
    this.emisor.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
