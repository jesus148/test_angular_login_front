
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  // / SERVICIO PARA EL producto osea para traer


  // http://localhost:3001/ : eso guarda
  private myAppUrl : string ;

  // /api/products el endpoint
  private myApiUrl : string;



  // constructor inicia
  // private http : HttpClient : pa usar servicios rest
  constructor( private http : HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl =  'api/products';
  }







  // 1 FORMA DE HACERLO mediante aqui en el service
  // metodo para obtener todos los produtos esto es una peticion
  // nesecita un token
  // ---descomentar esto
  getProducts():Observable<Product[]>{


    // obteniendo el token luego de entrar o loguearme
    // ver la variable q lop guarda en el > login.component.ts
    const token= localStorage.getItem('token');


    // headers
    // Las cabeceras (en inglés headers) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta.
    // en el backen esta en el validator-token.ts
    const headers = new HttpHeaders().set('authorization' , `Bearer ${token}`);

    // > verificar el f12 > el token obtenido > network> name(product)> selecciona todo > encabezados > autorization


    // obtiene la data pero debe enviarle el token
                                      //  peticion                           token dentro de un objeto , 2 headers es la constante
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}` , {headers :headers});
  }
  // -------------------------









  // 2 FORMA usamos mediante un interceptor en el
  // src\app\utils\add-token.interceptor.ts
  //   getProducts():Observable<Product[]>{


  //   return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, ;
  // }















}
