import { CanActivateFn, Router } from '@angular/router';
import { Login2Service } from '../login2.service';
import { inject } from '@angular/core';

export const noLogeadoGuard: CanActivateFn = (route, state) => {
  const loginService = inject(Login2Service);
  const router = inject(Router);

  if(!loginService.logueo) {
    router.navigateByUrl('/dashboard');
    return false;
  }else {
    return true;
  }

};
