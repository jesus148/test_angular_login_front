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



  // metodo inicia
  // private router : Router: redirigir a un componente x
  constructor(private router : Router){

  }


  // inicia
  ngOnInit(){

  }


  // metodo pa salir y eliminar el token
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }




}
