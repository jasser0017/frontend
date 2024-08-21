import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { AdminService } from '../../admin/admin.service';
import { KeycloakService } from '../../services/keycloak.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../model/appointment';

interface Treatment {
  id: number;
  description: string;
  name: string;
  imgUrl: string | null;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  appointment = new Appointment()
  theropies: any[] = [];
  user: any;

  constructor(private patientService: PatientService, private adminService: AdminService, private keycloakService: KeycloakService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadTheropies();
   // this.user = this.keycloakService.getUserProfile();
  }

  loadTheropies(): void {
    this.adminService.getAllTheropies().subscribe(
      (res: Treatment[]) => {
        this.theropies = res;
        console.log(this.theropies);
      },
      error => {
        console.error('Erreur lors de la récupération des therapies', error);
      }
    );
  }

  onSubmit(): void {
    
    const name=localStorage.getItem('name')
    const email =localStorage.getItem('email')
    
    console.log(email)
    if (this.appointment.user) {
      this.appointment.user.email = email;
  } else {
      this.appointment.user = { email: email };
  }
  if (this.appointment.user) {
    this.appointment.user.firstName = name;
} else {
    this.appointment.user = { firstName: name };
}
    
    console.log(this.appointment)
    this.patientService.createAppointment(this.appointment).subscribe(response => {
      console.log('Appointment created:', response);
      this.snackBar.open('Appointment created successfully!', 'Close', { duration: 3000 });
    }, error => {
      console.error('Error creating appointment', error);
      this.snackBar.open('Error creating appointment', 'Close', { duration: 3000 });
    });
  }
}
