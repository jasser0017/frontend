import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './header/service/service.component';
import { PriceComponent } from './header/price/price.component';
import { AboutComponent } from './header/about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },


    { path: '**', redirectTo: '' },

    

];
