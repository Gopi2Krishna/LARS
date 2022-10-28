import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FacultyLoginComponent } from './components/faculty-login/faculty-login.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path:'login-page', component:LoginPageComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'faculty-login', component:FacultyLoginComponent},
  {path:'front-page', component:FrontPageComponent},
  {path:"",redirectTo:'/front-page',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent,AdminLoginComponent,FacultyLoginComponent,FrontPageComponent]