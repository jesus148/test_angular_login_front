import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent , CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



  // donde se guardara todo
  listProduct : Product[] = [];



  // contructor inicia
  constructor( private _productoService:ProductService){

  }

// inicia
  ngOnInit():void{
    this.getProduct();
  }



  // obteniendo data productos
  // recordar q nesecite enviar un token pa obtener los datos
  getProduct(){
    this._productoService.getProducts().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    })
  }





}
