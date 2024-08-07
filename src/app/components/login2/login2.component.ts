import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule, FormBuilder, Validators , ReactiveFormsModule, FormControl} from '@angular/forms';  //validaciones para las validaciones en el form

import { CommonModule } from '@angular/common';
import { Login2Service } from '../../services/login2.service';

@Component({
  selector: 'app-login2',
  standalone: true,
      //agegamos esto de los imports , recordar poner arriba sus imports
  imports: [AppMaterialModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {



  username: string =  '';
  password: string =  '';




  formRegistrar = this.FormBuilder.group({
    validaDescripcion: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')],],

      validaPais: ['', [Validators.min(1)]] //para los paises
      });






  // CUANDO INCIA EL COMPONENTE
  constructor(private loginService:Login2Service ,
    private FormBuilder: FormBuilder //agregar esto para las validaciones recordar importar
  ) {

  }





  registra(){

  }












}
