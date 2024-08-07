import { CanActivateFn } from '@angular/router';

export const noLogeadoGuard: CanActivateFn = (route, state) => {
  return true;
};
