import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoAngular } from '../../DemoAngular';
import { ReceptionistService } from '../receptionist.service';
import { Console } from 'console';
interface Treatment {
  id: number;
  description: string;
  name: string;
  imgUrl: string | null;
}

@Component({
  selector: 'app-gerer-rendez-vous',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,DemoAngular],
  templateUrl: './gerer-rendez-vous.component.html',
  styleUrl: './gerer-rendez-vous.component.css'
})
export class GererRendezVousComponent implements OnInit {

  appointments: any[] = [];
  therapies: any[] = [];

  constructor(private receptionistService: ReceptionistService) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.loadTherapies(); 
  }

  loadAppointments(): void {
    this.receptionistService.getAllAppointments().subscribe(
      (data: any) => {
        this.appointments = data;
        console.log(this.appointments);
      },
      error => {
        console.error('Erreur lors de la récupération des rendez-vous', error);
      }
    );
  }

  loadTherapies():void{
      this.receptionistService.getAllTheropies().subscribe(
        (res: Treatment[]) => {
          this.therapies = res;
          console.log(this.therapies);
        },
        error => {
          console.error('Erreur lors de la récupération des therapies', error);
        }
      );
    
  }
  getTherapyName(theropyId: number): string {
    const therapy = this.therapies.find(t => t.id === theropyId);
    console.log(theropyId);
    console.log(this.therapies);
    return therapy ? therapy.name : 'Inconnu'; // Default to 'Unknown' if not found
  }

  accept(id: number): void {
    this.receptionistService.acceptAppointment(id).subscribe(
      () => {
        this.loadAppointments(); 
      },
      error => {
        console.error('Erreur lors de l\'acceptation du rendez-vous', error);
      }
    );
  }

  reject(id: number): void {
    this.receptionistService.rejectAppointment(id).subscribe(
      () => {
        this.loadAppointments(); 
      },
      error => {
        console.error('Erreur lors du rejet du rendez-vous', error);
      }
    );
  }





}
