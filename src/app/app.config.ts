import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { addToken3Interceptor } from './utils/add-token3.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes),
    provideAnimationsAsync(),
    provideToastr({}),
    // servicios rest
    // provideHttpClient(), provideAnimationsAsync()
    /* provideHttpClient(withInterceptorsFromDi()),
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AddTokenInterceptor,
        multi:true
    } */
        // para interceptores y servcios  rest
   provideHttpClient(withInterceptors([addToken3Interceptor]))
  ]
};
