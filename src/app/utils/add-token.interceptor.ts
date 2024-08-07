import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';



@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {


  // INTERCEPTOR
  // en versiones de angular puede variar averiguar pq
  // esto es para q cuando solicites algo en la peticion , se junto el token automatico



  constructor(private router: Router, private _errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // obteniendo el token
    const token = localStorage.getItem('token')

    // pregunta si existe el token
  if(token) {
    // clone de la peticion
    request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
  }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401){
          this._errorService.msjError(error)
          this.router.navigate(['/login'])
        }
        return throwError(() => error);
      })
    );
  }
}
