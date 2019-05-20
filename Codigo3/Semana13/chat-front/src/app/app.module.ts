import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing-module';
import { SalitaComponent } from './components/salita/salita.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ChatComponent } from './components/chat/chat.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


let configLogin = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('228245834555-8v51o5318dclmk33fd6gm5g1frpfpcr0.apps.googleusercontent.com')
  },//chat-1558363522274   28245834555-mqao0idep327rse5toin4bgeietp6pp1.apps.googleusercontent.com
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2775463049191836')
  }
]);

export function provideConfig() {
  return configLogin;
}

// const config: SocketIoConfig = { url: 'http://localhost:3700', options: {} };
// const config: SocketIoConfig = { url: 'https://joelvaldez-chat-codigo3.herokuapp.com/', options: {} };
const config: SocketIoConfig = { url: 'https://chateandox-codigo3.herokuapp.com/', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SalitaComponent,
    ListaUsuariosComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    SocialLoginModule
  ],
  providers:
  [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
