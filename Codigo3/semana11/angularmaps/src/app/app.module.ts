import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importando modulo material
import { MaterialModule } from './material.module';


// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// importando angular mapas
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './dialogs/mapa-editar/mapa-editar.component';


@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBzh23_Ka5AqoOOaFHq3cArxIf2mCC_MLg'
    }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
