import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule, FormBuilder, Validators , ReactiveFormsModule, FormControl} from '@angular/forms';  //validaciones para las validaciones en el form

import { CommonModule } from '@angular/common';
import { Login2Service } from '../../services/login2.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login2',
  standalone: true,
      //agegamos esto de los imports , recordar poner arriba sus imports
      imports: [AppMaterialModule, FormsModule, CommonModule , ReactiveFormsModule],//recordar tambien poner aqui los import de las validaciones
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {



  username: string =  '';
  password: string =  '';




  formValidar = this.FormBuilder.group({
    usuario: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')],],

    password: ['',[Validators.required]]

  });






  // CUANDO INCIA EL COMPONENTE
  constructor(private loginService:Login2Service ,
    private FormBuilder: FormBuilder ,     private toastr: ToastrService
    //agregar esto para las validaciones recordar importar
  ) {

  }





  registra(){
    if(!this.formValidar.valid) {

      this.toastr.success('todos los campos son obligatorios' , 'succes');
    }

    const usuario = this.formValidar.controls['usuario'].value!.trim();
    const password = this.formValidar.controls['password'].value!.trim();

    this.loginService.logueo(usuario, password).subscribe((resp:any) => {
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.loginService.usuario = resp.usuario;
      this.loginService.islogedd = true;

      console.log( resp);

    }, (err) => {
      // this.messagesService.showError(err.error.message);
      console.log(err);
      this.toastr.error('error al entrar ' , 'succes');
    });
  }








}
