import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


  /* _keycloak: Keycloak.KeycloakInstance | undefined ;
    private user :User | undefined;
  constructor() { }

    async init(): Promise<void> {
      try {
        // Initialize Keycloak
        this._keycloak = new Keycloak({
          url: 'http://localhost:8080',
          realm: 'demo-app',
          clientId: 'demo',
        });
  
        this._keycloak.init({ onLoad: 'check-sso' }).then((authenticated) => {
          if (!authenticated) {
            this.login();
          }
        });

       
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
      }
    }

    login() {
      this._keycloak?.login();
    }
  
    logout() {
       this._keycloak?.logout();
    }

    getToken(): Promise<string> {
      return new Promise((resolve, reject) => {
        if (this._keycloak?.authenticated) {
         
        } else {
          reject('Not authenticated');
        }
      });
    }*/
  
}
