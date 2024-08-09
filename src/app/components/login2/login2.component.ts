import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule, FormBuilder, Validators , ReactiveFormsModule, FormControl} from '@angular/forms';  //validaciones para las validaciones en el form

import { CommonModule } from '@angular/common';
import { Login2Service } from '../../services/login2.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private FormBuilder: FormBuilder ,     private toastr: ToastrService ,   private router: Router
    //agregar esto para las validaciones recordar importar
  ) {

  }







  // metodo loguearse
  registra(){
    // verfica validacion
    if(!this.formValidar.valid) {

      this.toastr.success('todos los campos son obligatorios' , 'succes');
    }

    // obteniendo la data
    const usuario = this.formValidar.controls['usuario'].value!.trim();
    const password = this.formValidar.controls['password'].value!.trim();


    // llama al servicio y le envia
    this.loginService.logueo(usuario, password).subscribe((resp:any) => {
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.loginService.usuario = resp.usuario;
      this.loginService.islogedd = true;

      console.log( resp);

      // verifica la data del back pa redireccionar a otro componente
      // usuario.role  : debe ser igual en el backend
      if(resp.usuario.role ===  'FINZ'){
        this.router.navigate(['/dashboard'])

      }


      if(resp.usuario.rol ===  'FINZ'){
        this.router.navigateByUrl('[/dashboard]')
      }



    }, (err) => {
      // this.messagesService.showError(err.error.message);
      console.log(err);
      this.toastr.error('error al entrar ' , 'succes');
    });
  }








}
