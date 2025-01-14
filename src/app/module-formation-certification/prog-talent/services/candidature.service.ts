import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from '../models/candidaturesModel';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiUrl = 'http://localhost:3000/Candidatures';  // URL de l'API pour les candidatures

  constructor(private http: HttpClient) {}

  // Récupérer toutes les candidatures
  getCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.apiUrl);
  }

  // Récupérer une candidature par ID
  getCandidature(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle candidature
  createCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiUrl, candidature);
  }

  // Mettre à jour une candidature existante
  updateCandidature(id: number, candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(`${this.apiUrl}/${id}`, candidature);
  }

  // Supprimer une candidature
  deleteCandidature(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
