import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';  //importando para los mensajes
import {ToastrService} from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, AppMaterialModule, FormsModule, CommonModule, SpinnerComponent] ,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {






  // donde se guarda la data
  username : string = '';
  password : string = '' ;
  confirmPassoword : string = '';


// para el spinner ose el icono de carga
  loading: boolean = false;






  // inicia constructor
  // toastr : llama al toast para mensaje
  // private _userService : UserService : servicio correspondiente
  // rivate router : Router : 2 forma pa moverse dentro de componentes
  // private _errorService : ErrorService : para manejar los errores
  constructor (private toastr: ToastrService , private _userService : UserService
    ,private router : Router  , private _errorService : ErrorService){

  }

  // inicia tambien
  ngOnInit(): void{

  }
















  //--------------------- agregar usuario
  addUser(){

    // validar q no este vacio
    if(this.username ===  '' || this.password ===   '' || this.confirmPassoword === ''){

      // alert('todos los campos son obligatorios')

      //tipo de alert pero con el toast
      this.toastr.error('todos los campos son obligatorios' ,'Error');
      return;
    }

    // valida q los password si son diferentes
    if(this.password != this.confirmPassoword){
      this.toastr.error('los password son distintos' , 'error')
      return;
    }

    //creamos el objeto donde se guarda la data pa enviar
    const user:User ={
      // parametros      variables
      username: this.username,
      password : this.password
    }



    // resignar el icono de carga para q aparesca
    this.loading = true;












    // 1 FORMA DE REGISTRAR
    // subscribe es un método que se utiliza para gestionar la suscripción a un observable.
    // suscribe : El uso de subscribe es fundamental para trabajar con datos asincrónicos en Angular y permite manejar flujos de datos de manera eficiente y reactiva. osea para recibir datos de un api
    // ----------------descomentar
    // this._userService.Registrar(user).subscribe(data =>{

    //   // cuando registra cierra la carga
    //   this.loading =false;

    //   this.toastr.success(`el usuario ${this.username} fue  registrado con exito` ,  'usuario  registrado');

    //   // 2 forma de redireccionar a un componente mediante en controller
    //   // al registrar regresa al login
    //   // recordar en el back configurar los cores
    //   this.router.navigate(['/login']);

    //   // controlando errores cuando el usuario ya existe
    //   // el backend retorna un error y lo capturamos pa ver en el front
    // } , (event : HttpErrorResponse) =>{

    //   // cuando hay error cerramos el icono de carga
    //   this.loading = false ;

    //   // verificando si el backen me responde algo o en todo el servidor o backend esta funcionando
    //   if(event.error.msg){
    //   // msg : = en el backend
    //     console.log(event.error.msg );
    //     // mostrando al usuario
    //     this.toastr.error(event.error.msg , 'error');

    //     // si es un error desconocido osea el servidor o el backend no devuelve nada o no estan disponibles
    //   }else{
    //     this.toastr.error('upps ocurrio un error , por favor comuniquese con el administrador')


    //   }


    // })
// --------









    // 2 FORMA REGISTAR
    this._userService.Registrar(user).subscribe({

      // prpiedades del suscribe
      // https://rxjs.dev/deprecations/subscribe-arguments : documentacion

      // todo ok
      next:(v) => {

      // cuando registra cierra la carga
      this.loading =false;

      this.toastr.success(`el usuario ${this.username} fue  registrado con exito` ,  'usuario  registrado');

      // 2 forma de redireccionar a un componente mediante en controller
      // al registrar regresa al login
      // recordar en el back configurar los cores
      this.router.navigate(['/login']);

      // controlando errores cuando el usuario ya existe
      // el backend retorna un error y lo capturamos pa ver en el front
      },



      // error en el sucribe
      error: (e) => {
         //   // cuando hay error cerramos el icono de carga
      this.loading = false ;

      // 1 forma de manejar los errores mediante un metodo aqui mismo
      // usa un mensaje en una funcion
      this.msjError(e);



      // 2 forma es manejar errores
      // mediante un metodo del service , ver el componenteLogin

      },


      // sea error o todo ok
      complete: () => console.info('complete')

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
