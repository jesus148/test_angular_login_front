import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

export const addToken3Interceptor: HttpInterceptorFn = (req, next) => {



  const router = inject(Router);
  const service= inject(ErrorService);





      // obteniendo el token
      const token = localStorage.getItem('token')

      console.log("test");

      if(!token){

        router.navigateByUrl('/login')
        console.log("error");
        catchError((error: HttpErrorResponse) => {
          if(error.status === 401){
            service.msjError(error)
            router.navigate(['/login'])
            console.error("error test")
            alert("error")
          }
          return throwError(() => error);
        })

      }

  console.log(req  + "test");
  return  next(req);


};
