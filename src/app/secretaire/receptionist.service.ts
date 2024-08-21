import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASIC_URL ="http://localhost:9000"
@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.http.get(`${BASIC_URL}/appointments/getAll`);
  }

  acceptAppointment(id: number): Observable<any> {
    return this.http.post(`${BASIC_URL}/appointments/${id}/accept`, {});
  }

  rejectAppointment(id: number): Observable<any> {
    return this.http.post(`${BASIC_URL}/appointments/${id}/reject`, {});
  }
}
