import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje;
  div;
  constructor(private _sWebsocket:WebsocketService) { }

  ngOnInit() {
    this.div=document.getElementById('mensajes');

    this._sWebsocket.nuevoMensaje().subscribe((content:any)=>{
      // console.log(content);
      let p = document.createElement('p');
      p.innerHTML = content.nombre + ' dice: ' + content.mensaje;
      p.setAttribute('style','border:1px solid black; border-radius:2px; width:100%; ')
      this.div.appendChild(p);
      this.div.scrollTop = this.div.scrollHeight;
    })
  }

  enviarMensaje(){
    this._sWebsocket.emitirMensaje(this.mensaje);
    this.mensaje = '';
  }
}
