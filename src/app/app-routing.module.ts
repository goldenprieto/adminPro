import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

  { path:'',
    component:PagesComponent,
    children:[
      { path:'bashboard', component: DashboardComponent },
      { path:'grafica1', component: Grafica1Component }, 
      { path:'progress', component: ProgressComponent },
      { path:'', redirectTo:'/bashboard',pathMatch:'full'},
    ]
   },
  
    { path:'register', component: RegisterComponent },
    { path:'login', component: LoginComponent },
    { path:'**', component: NopagesfoundComponent }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
