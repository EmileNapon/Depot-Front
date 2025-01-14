import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group} from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiUrl = 'http://localhost:3000/Groups'; // Remplacer par votre API

  constructor(private http: HttpClient) {}

  getGroupes(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl);
  }

  getGroupesById(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.apiUrl}/${id}`);
  }

  addGroupes(seance: Group): Observable<Group> {
    return this.http.post<Group>(this.apiUrl, seance);
  }

  updateGroupes(seance: Group): Observable<Group> {
    return this.http.put<Group>(`${this.apiUrl}/${seance.id}`, seance);
  }

  deleteGroupes(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteSeances(listeGroupe: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${listeGroupe}`);
  }
}
