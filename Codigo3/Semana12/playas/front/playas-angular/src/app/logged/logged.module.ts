import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedRoutingModule } from './logged-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../material.module';
import { PlayasComponent } from './components/playas/playas.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, MainContentComponent, PlayasComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBzh23_Ka5AqoOOaFHq3cArxIf2mCC_MLg'
    })
  ]
})
export class LoggedModule { }
