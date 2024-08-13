import { Component } from '@angular/core';
import { AboutComponent } from "../header/about/about.component";
import { PriceComponent } from "../header/price/price.component";
import { ContactComponent } from "../patient/contact/contact.component";
import { AppointmentComponent } from "../patient/appointment/appointment.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { HistoriqueComponent } from '../admin/historique/historique.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, HistoriqueComponent,PriceComponent, ContactComponent, AppointmentComponent, TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
