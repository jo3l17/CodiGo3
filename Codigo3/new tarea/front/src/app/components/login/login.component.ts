import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

//Login
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombre = '';
  private user: SocialUser;
  private loggedIn: boolean;
  
  constructor(private _sWebsocket: WebsocketService, private _router: Router, private authService: AuthService) { }



  ngOnInit() {
    this.authService.authState.subscribe((user: SocialUser) => {
      if (user){
        console.log(user);
        this._sWebsocket.login(user.name);
        this._router.navigateByUrl('/salita');
      }
    });
  }

  login() {
    console.log(this.nombre);
    this._router.navigateByUrl('/salita')
    this._sWebsocket.login(this.nombre);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
