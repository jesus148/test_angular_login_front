
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Login2Component } from './components/login2/login2.component';

// guards
import { authGuard } from './utils/auth.guard';



// RUTEO DE LOS COMPONENTES


export const routes: Routes = [

// pathMatch : 'full' usa tecnica de macheo y compare la ruta completa osea redirección solo ocurra cuando la URL completa coincide exactamente con la ruta especificada


// cuando esta vacio la url
  {path:'' , redirectTo:'login2' , pathMatch : 'full'},

  // rutas a componentes
  {path:'login' , component: LoginComponent},
  {path:'singIn' , component: SignInComponent},

  // con el guard lo protege esta ruta del componente osea usuarios no autenticados accedan a ciertas rutas.
  // canActivate:[authGuard]} : se ejecuta antes de entrar al componente
//   CanActivate: Determina si una ruta puede ser activada.
// CanActivateChild: Determina si las rutas hijas de una ruta pueden ser activadas.
  {path:'dashboard' , component: DashboardComponent , canActivate:[authGuard]},
  {path:'login2' , component: Login2Component},


  // cuando escriben cualquier url q no existe
  {path:'**' , redirectTo:'login2' , pathMatch : 'full'}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
