import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/tousModel';
// import { Formation } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:3000/Formations'; // Remplacer par votre API

  constructor(private http: HttpClient) {}

  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
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

