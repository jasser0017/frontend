import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { PriceComponent } from "../price/price.component";
import { ContactComponent } from "../contact/contact.component";
import { AppointmentComponent } from "../appointment/appointment.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { HistoriqueComponent } from '../historique/historique.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, HistoriqueComponent,PriceComponent, ContactComponent, AppointmentComponent, TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
