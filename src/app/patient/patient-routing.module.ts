import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

export const routes: Routes = [
 
  { path: 'appointment', component: AppointmentComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'testimonial', component : TestimonialComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
