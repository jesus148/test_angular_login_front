import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, AppMaterialModule, FormsModule, CommonModule, SpinnerComponent] ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  // donde se guarda la data
  username : string = '';
  password : string = '';


  // icono de cargar
  loading : boolean = false;




  // inicia
  // private toastr: ToastrService : para mostrar mensajes
  // private _userService : UserService : el service debe comenzar con _(guion abajo )
  // private router: Router: para movernos en diferentes componentes
    // _errorService : ErrorService : servicio pa manejar los errores
  constructor(private toastr: ToastrService ,
    private _userService : UserService,
    private router: Router ,
    private _errorService : ErrorService
  ){}


  // inicia
  ngOnInit(): void{

  }







  // metodo para ingresar
  login(){

    // verificando si hay data
    if( this.username ===   '' || this.password ===  ''){
      this.toastr.error('todos los campos son obligatorios' , 'Error');
      return;
    }

    //creamos el body osea guardamos para el service
    // propiedades = en el back y bd
    const user: User ={
      // parametros      variables
      username :this.username ,
      password : this.password
    }


    this.loading=true;


    // registrando
    this._userService.login(user).subscribe({

      // usando propiedades del suscribe

      // todo ok , obtenemos el response del back
      next :(token) =>{

        // seteamos o agregamos el valor
        // localStorage: es del navegador
        // variable    token recibido del back
        // 'token' , token =>
        localStorage.setItem('token' , token);
        // para ver el token > dirigite en el navegador > f12 > application(en los tres puntitos verticales) > localstorage>
        //  selecciona tu localhost



        // lo redirige
        this.router.navigate(['/dashboard'])


        // ver el token en la consola > en produccion no es recomendable
        // https://jwt.io/ (pon el token de la consola y veras el usuario , el jsonwebtoken se usa en el back)
        // console.log(token);

      },

      // cuando hay error , el error sea del servidor o un error desconocido
      error:(e: HttpErrorResponse)=>{

        // 1 forma manejar error metodo aqui mismo
        // enviamos el metodo el error
        // this.msjError(e);

        // 2 forma manejar el error mediante el service
        // usando el servicio para manejar el error
        this._errorService.msjError(e);
        this.loading=false;

      }


    })



  }











  // metodo devuel el error sea del server o back o de otra cosa
  msjError( e: HttpErrorResponse){
    // verificando si el backen me responde algo o en todo el servidor o backend esta funcionando
    if(e.error.msg){
      // msg : = en el backend
        console.log(e.error.msg );
        // mostrando al usuario
        this.toastr.error(e.error.msg , 'error');

        // si es un error desconocido osea el servidor o el backend no devuelve nada o no estan disponibles
      }else{
        this.toastr.error('upps ocurrio un error , por favor comuniquese con el administrador')


      }

}









































}
