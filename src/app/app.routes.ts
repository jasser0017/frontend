import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { HistoriqueComponent } from './historique/historique.component';
import { GestionReceptionistComponent } from './gestion-receptionist/gestion-receptionist.component';
import { AddTheropyComponent } from './add-theropy/add-theropy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'price', component: PriceComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' },
    {path:'historique',component: HistoriqueComponent},
    {path: 'gestion-receptionist',component:GestionReceptionistComponent},
    {path:'add-theropy', component:AddTheropyComponent}
    

];
