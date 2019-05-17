import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-salita',
  templateUrl: './salita.component.html',
  styleUrls: ['./salita.component.scss']
})
export class SalitaComponent implements OnInit {

  constructor(private authService: AuthService,private sWebsocket:WebsocketService) { }

  ngOnInit() {
  }
  cerrarSesion(): void {
    this.authService.signOut().then(() => {
      localStorage.removeItem('nombre');
      this.sWebsocket.logout();
    }).catch(()=>{
      localStorage.removeItem('nombre');
      this.sWebsocket.logout();
    });
  }
}
