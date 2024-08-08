import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { KeycloakService } from './services/keycloak.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

export function kcFactory (kcSecurity:KeycloakService){
  return ()=> kcSecurity.init()
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),

    {provide:APP_INITIALIZER ,deps:[KeycloakService],
      useFactory:kcFactory,multi:true},
      
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      },
    
    
  
    provideClientHydration()]
};
