
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



// RUTEO DE LOS COMPONENTES


export const routes: Routes = [

// pathMatch : 'full' usa tecnica de macheo y compare la ruta completa osea redirección solo ocurra cuando la URL completa coincide exactamente con la ruta especificada


// cuando esta vacio la url
  {path:'' , redirectTo:'login' , pathMatch : 'full'},

  // rutas a componentes
  {path:'login' , component: LoginComponent},
  {path:'singIn' , component: SignInComponent},
  {path:'dashboard' , component: DashboardComponent},


  // cuando escriben cualquier url q no existe
  {path:'**' , redirectTo:'login' , pathMatch : 'full'}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
