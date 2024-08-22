import { Injectable } from '@angular/core';
import { User } from '../model/user';
import Keycloak from 'keycloak-js';
import { Observable, map,BehaviorSubject, from } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {


   _keycloak: Keycloak | undefined ;
    private user :User | undefined;
    private _userSubject = new BehaviorSubject<any>(null);
  constructor(private storageService: StorageService) { }

    async init(): Promise<void> {
      try {
        // Initialize Keycloak
        this._keycloak = new Keycloak({
          url: 'http://localhost:9091',
          realm: 'toothtrack',
          clientId: 'toothtrack-app',
        });
  
        this._keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
          if (authenticated) {
            console.log(this._keycloak.token)
            this.storageService.setRoles(this._keycloak.tokenParsed.realm_access.roles);
            this.getUserProfile();
          } else {
            // This block is redundant with 'login-required', but you can use it for additional handling if needed
            console.log('User is not authenticated.');
          }
        }).catch((error) => {
          console.error('Keycloak initialization failed', error);
        });

       
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
      }
    }

    login() {
      this._keycloak?.login();
      console.log('token'+this._keycloak.token)
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
    }
    

    get token$(): Observable<string> {
      return from(this._keycloak?.updateToken(10) || Promise.resolve()).pipe(
        map(() => this._keycloak?.token || ''),
        map(token => token)
      );
    }

    getUserProfile() {
      console.log(this._keycloak.tokenParsed)
      
      const tokenParsed = this._keycloak.tokenParsed;
const lastName = tokenParsed['family_name'];
const email = tokenParsed['email'];
const name = tokenParsed['given_name']
localStorage.setItem('name' , name)
localStorage.setItem('email', email)
localStorage.setItem('lastName',lastName)
      return this._keycloak.loadUserProfile();
    }
  
  
    
  
  }
    
  