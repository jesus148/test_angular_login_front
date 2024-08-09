import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

export const addToken3Interceptor: HttpInterceptorFn = (req, next) => {


  // Interceptor cada vez q hagas una solicitud hhtp
  // esto lo intercepta ya sea loa agrega al metodo rest o en otras cosas como el metodo getproducts
  // es diferente a un guard pq el interceptor interecpta y modifica el request y administra el response



  // pare ver las solicitudes http > f12 > navegador > network(red) >  >
  // selecciona tu   nombre product >encabezados > autorization > y saldra tu token clonado
  // en pocas palabras es capturar ese token y enviarlo al back




  // en constantes no se puede usar contructores
  const router = inject(Router);
  const service= inject(ErrorService);





      // obteniendo el token
      const token = localStorage.getItem('token')

      console.log("test");

      // if(!token){

      //   router.navigateByUrl('/login')
      //   console.log("error");
      //   catchError((error: HttpErrorResponse) => {
      //     if(error.status === 401){
      //       service.msjError(error)
      //       router.navigate(['/login'])
      //       console.error("error test")
      //       alert("error")
      //     }
      //     return throwError(() => error);
      //   })

      // }



      // si encuentra el token
      // esa peticion lo setea o lo aumenta con el header junto con el token pa enviar al back
      if (token){
        req = req.clone({setHeaders:{ Authorization : `Bearer ${token}`}})

      }

      // next(req) : le envio el token clonado osea hace un solictud htttp y devuelve un observable
      //pipe() : maneja los datos emitidos por el observable o la data recibida del rest en este caso mapeare un error
      return next(req).pipe(
        // si hay error el dato del response
        catchError((error: HttpErrorResponse) => {
          // verifica el tipo de error
          if(error.status === 401){
          // mensaje
            service.msjError(error)
            // redirige
            router.navigate(['/login'])
          }
          // es un observable osea un rest  que lanza un errror
          // y genera el error que esta generando eso
          return throwError(() => error);
        })
      );





    }



