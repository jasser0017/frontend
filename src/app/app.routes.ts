import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './header/service/service.component';

import { AboutComponent } from './header/about/about.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    
    { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
    { path: 'secretaire', loadChildren: () => import('./secretaire/secretaire.module').then(m => m.SecretaireModule) },
    


    { path: '**', redirectTo: '' },

    

];
