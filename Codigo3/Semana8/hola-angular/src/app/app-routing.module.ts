import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; deleted
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes:Routes = [
  {
    path:'heroes',
    component:HeroesComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
