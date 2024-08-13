import { Component, OnInit } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,  FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  role:String =""
 
  constructor(private storageService: StorageService,
    private router :Router) { }

  ngOnInit(): void {
    this.storageService.roles$.subscribe(roles => {
      this.role=roles[0]
      console.log('Roles in Component B:', roles);
    });
  }
  getLinks() {
    switch (this.role) {
      case 'admin':
        return [
          { path: 'admin/gestion-receptionist', label: 'Gerer Receptionist' },
          { path: 'admin/add-theropy', label: 'Gerer Therapis' },
          { path: 'admin/historique', label: 'Historique' }
        ];
      case 'receptionist':
        return [
          { path: 'receptionist/gestionrdv', label: 'Gerer Rendez-Vous' }
        ];
      case 'patient':
        return [
          { path: 'home', label: 'Home' },
          { path: 'header/about', label: 'About' },
          { path: 'header/services', label: 'Service' },
          { path: 'header/price', label: 'Pricing Plan' },
          { path: 'testimonial', label: 'Testimonial' },
          { path: 'patient/appointment', label: 'Appointment' },
          { path: 'patient/contact', label: 'Contact' }
        ];
      default:
        return [];
    }
  }

}