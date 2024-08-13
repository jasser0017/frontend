import { Injectable } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private rolesSubject = new BehaviorSubject<string[]>([]);
  roles$ = this.rolesSubject.asObservable();

  constructor() {}

  setRoles(roles: string[]) {
    this.rolesSubject.next(roles);
  }
  
 

}





