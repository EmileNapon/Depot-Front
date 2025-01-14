import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiUrl = 'http://localhost:3000/Seances'; // Remplacer par votre API
  private lastId: number = 0; // Pour simuler l'incrémentation d'ID

  constructor(private http: HttpClient) {}

  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(this.apiUrl);
  }

  getSeanceById(id: number): Observable<Seance> {
    return this.http.get<Seance>(`${this.apiUrl}/${id}`);
  }

//   addSeance(seance: Seance): Observable<Seance> {
//     return this.http.post<Seance>(this.apiUrl, seance);
//   }

  addSeance(seance: Seance): Observable<Seance> {
    // Attribuer un ID numérique et incrémental
    // seance.id = ++this.lastId;
    return this.http.post<Seance>(this.apiUrl, seance);
  }

  updateSeance(seance: Seance): Observable<Seance> {
    return this.http.put<Seance>(`${this.apiUrl}/${seance.id}`, seance);
  }

  deleteSeance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }






  deleteSeances(listeSeance: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${listeSeance}`);
  }
}
