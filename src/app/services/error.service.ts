import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  // private toastr: ToastrService: para los mensajes de alerta
  constructor(private toastr: ToastrService) { }


  // service para manejar los errores






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
