import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

const BASIC_URL ="http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  createAppointment(appointmentDTO: Appointment): Observable<any> {
    return this.http.post(`${BASIC_URL}/appointments`, appointmentDTO);
    
  }
}
