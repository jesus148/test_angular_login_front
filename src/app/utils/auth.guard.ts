import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

export const authGuard: CanActivateFn = (route, state) => {


  // guard
  // Propósito: Los guards en Angular se utilizan para controlar el acceso a las rutas de la aplicación. Son funciones o clases que determinan si una ruta en particular puede ser activada, desactivada, cargada, etc., dependiendo de ciertas condiciones.

  // Cuándo se ejecutan: Se ejecutan antes de que se active una ruta o se cargue un módulo en la aplicación. Esto significa que se evalúan antes de que el componente asociado a una ruta se renderice.

  // Tipos de Guards:

  // CanActivate: Determina si una ruta puede ser activada.
  // CanActivateChild: Determina si las rutas hijas de una ruta pueden ser activadas.
  // CanDeactivate: Permite decidir si se permite la desactivación (navegación fuera) de una ruta.


  // Guards y interceptors pueden usarse juntos para reforzar la seguridad de una aplicación. Por ejemplo, un guard puede evitar que un usuario no autenticado acceda a una ruta protegida, mientras que un interceptor puede asegurarse de que cada solicitud HTTP a un recurso protegido incluya un token de autenticación.


  // en constantes no se puede usar contructores
  const router = inject(Router);
  const service= inject(ErrorService);


  const token = localStorage.getItem('token');


  if(token == undefined){
   router.navigate(['/login']);

  }
  return true;


};
