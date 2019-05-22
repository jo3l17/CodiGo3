import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CreateComponent } from './components/create/create.component';
import { RemoveComponent } from './components/remove/remove.component';


const routes:Routes = [
    {
        path: '',
        component: SidenavComponent,
        children:[
            {
                path:'',
                component: MainContentComponent
            },
            {
                path:'create',
                component: CreateComponent
            },
            {
                path:'remove',
                component:RemoveComponent
            }
        ]
    },
];

@NgModule({
declarations: [],
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LoggedRoutingModule { }
