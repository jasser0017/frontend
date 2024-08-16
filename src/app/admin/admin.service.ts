import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

const BASIC_URL ="http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http: HttpClient) { }


  addTheropy(theropyDto:any): Observable<any>{
    return this.http.post(BASIC_URL + "", theropyDto)
  }

  getAllTheropies(): Observable<any>{
    return this.http.get(BASIC_URL + "/theropies/getAll")

    
}
getTheropyById(id: any): Observable<any> {
  return this.http.get(`${BASIC_URL}/theropies/search/${id}`);
}

deleteTheropy(id:any): Observable<any>{
  return this.http.delete(`${BASIC_URL}/theropies/theropy/${id}`)


}






}