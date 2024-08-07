import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {




  // contructor inicia
  constructor( private _productoService:ProductService){

  }

// inicia
  ngOnInit():void{
    this.getProduct();
  }



  // obteniendo data productos
  getProduct(){
    this._productoService.getProducts().subscribe(data =>{
      console.log(data);
    })
  }





}
