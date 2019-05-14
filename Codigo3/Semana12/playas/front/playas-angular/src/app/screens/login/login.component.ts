import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objUsuario = {
    usu_email: '',
    usu_pass: ''
  }

  constructor(private _sAuth: AuthService, private _sRouter:Router) { }

  ngOnInit() {
    if (this._sAuth.isLogged()) {
      this._sRouter.navigateByUrl('logged/playas');
    }
  }

  login() {
    this._sAuth.login(this.objUsuario).subscribe((respuesta) => {
      if (respuesta.message == "ok" && respuesta.token) {
        this._sAuth.saveToken(respuesta.token);
        if (this._sAuth.isLogged()) {
        this._sRouter.navigateByUrl('/logged/playas')
        }
      }
    });
  }
}
