import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Login2Service } from '../login2.service';

export const isLogeedGuard: CanActivateFn = (route, state) => {


  const loginService = inject(Login2Service);
  const router = inject(Router);

  // guard para comprobar si eta logeado



  // verificiar si esta logueado no puede regresar al componente del logeo
  // y si no esta logeado no puede entrar al componente privado

  if(loginService.islogedd) {

    if(loginService.usuario.role === 'ADMIN') {
      router.navigateByUrl('/dashboard');
    }

    // if(loginService.usuario.role === 'FINZ') {
    //   router.navigateByUrl('/pages/cash-outlay');
    // }
    return false;
  } else {
    // si no esta logeado entra al componente login
    return true;
  }



};
