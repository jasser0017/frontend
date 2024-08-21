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
      if(roles.includes("admin")){
        this.role="admin"
      }else if(roles.includes("patient")){
        this.role="patient"
      }else{
        this.role="receptionist"
      }
      console.log('Roles in Component :',  this.role);
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
          { path: 'secretaire/gerer-rendez-vous', label: 'Gerer Rendez-Vous' }
        ];
      case 'patient':
        return [
          { path: 'home', label: 'Home' },
          { path: 'header/about', label: 'About' },
          { path: 'header/services', label: 'Service' },
          
          { path: 'patient/testimonial', label: 'Testimonial'},
          
          { path: 'patient/contact', label: 'Contact' }
        ];
      default:
        return [];
    }
  }

}