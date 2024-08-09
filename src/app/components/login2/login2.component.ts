import { Component, inject } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule, FormBuilder, Validators , ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';  //validaciones para las validaciones en el form
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login2Service } from '../../services/login2.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login2',
  standalone: true,
      //agegamos esto de los imports , recordar poner arriba sus imports
  imports: [AppMaterialModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {












}
