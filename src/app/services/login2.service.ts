import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class Login2Service {


  // valores de los endpoints
  private myapp : string =  '';
  private myappi : string =  '';



  // veririfica si esta logeado
  islogedd : boolean = false;


  // guarda toda la data
  usuario : any ;


  // inicia
  constructor( private http : HttpClient) {

    this.myapp = environment.base_url;

    this.myappi =   '/login-wp';

  }



  // metodo para entrar
  logueo( usuario :string , password : string){

   return  this.http.post(`${environment.base_url}/login-wp` , {usuario, password})
  }











}
