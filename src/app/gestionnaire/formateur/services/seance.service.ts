import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/seance/list_seances'; // Remplacer par votre API

  private lastId: number = 0; // Pour simuler l'incrémentation d'ID

  constructor(private http: HttpClient) {}

  getSeances(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // getSeanceById(id: number): Observable<Seance> {
  //   return this.http.get<Seance>(`${this.apiUrl}/${id}`);
  // }



  // addSeance(seance: Seance): Observable<Seance> {
  //   return this.http.post<Seance>(this.apiUrl, seance);
  // }


  // updateSeance(seance: Seance): Observable<Seance> {
  //   return this.http.put<Seance>(`${this.apiUrl}/${seance.id}`, seance);
  // }

  // deleteSeance(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }




  // deleteSeances(listeSeance: any): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${listeSeance}`);
  // }
}
