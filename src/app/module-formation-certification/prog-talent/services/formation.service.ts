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
 private apiUrl2="http://127.0.0.1:8000/fidalli/formation/list-formations"
  constructor(private http: HttpClient) {}

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl2}/${id}`);
  }



  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.apiUrl, formation);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(`${this.apiUrl}/${formation.id}`, formation);
  }

  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

