import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

const BASIC_URL ="http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addTheropy(theropyDTO: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/theropies/add`, theropyDTO);
  }

  getAllTheropies(): Observable<any> {
    return this.http.get(`${BASIC_URL}/theropies/getAll`);
  }

 

  deleteTheropy(id: any): Observable<any> {
    return this.http.delete(`${BASIC_URL}/theropies/${id}`);
  }

  updateTheropy(id: number, theropyDTO: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', theropyDTO.name);
    formData.append('description', theropyDTO.description);
    if (theropyDTO.img) {
      formData.append('img', theropyDTO.img);
    }
  
    return this.http.put(`${BASIC_URL}/theropies/update/${id}`, formData);
  }
  
}


/*getImage(imageName: string): Observable<Blob> {
  const headers = new HttpHeaders({
    'Accept': 'image/jpeg' // Changez selon le type d'image
  });

  return this.http.get<Blob>(`${BASIC_URL}${imageName}`, {
    headers: headers,
    responseType: 'blob' as 'json'
  });
}*/






