import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/tousModel';
// import { Formation } from '../models/tousModel';



@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/formation/list-formations'; // Remplacer par votre API
  private apiUrl1= 'http://127.0.0.1:8000/fidalli/formation/update'; // Remplacer par votre API
  private apiUrl2 ='http://127.0.0.1:8000/fidalli/formation/create'; // Remplacer par votre API
  private apiUrl3="http://127.0.0.1:8000/fidalli/formations"
  private baseUrl="http://127.0.0.1:8000/fidalli"

  constructor(private http: HttpClient) {}
  
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.apiUrl2, formation);
  }

  updateFormation(id: number, formation: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/formation/${id}/update/`, formation);
  }

  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl3}/${id}/remove/`);
  }





}

