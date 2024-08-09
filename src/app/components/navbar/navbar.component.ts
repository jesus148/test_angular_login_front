import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink] ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {






  // incia
  constructor( private router : Router ){
  }




  // metodo salir
  logOut() : void{
    // al salir remueve el token creado al iniciar
  localStorage.removeItem('token');

  // redirige al login
  this.router.navigate(['/login'])
  }







}
