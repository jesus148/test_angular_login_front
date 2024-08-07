import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // SERVICIO PARA EL USUARIO


  // http://localhost:3001/ : eso guarda
  private myAppUrl : string ;

  // /api/users el endpoint
  private myApiUrl : string;



  // constructor inicia
  constructor( private http : HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl =  'api/users';
  }

  // Observable : Llamadas HTTP , Eventos de usuario , se usa para asincronia


  // metodo registrar
  Registrar(user : User ): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}` , user )
  }



  // metodo login una vez registrado me devuelva el token osea para entrar
  login( user : User) :Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login` , user);
  }






}
