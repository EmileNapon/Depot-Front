import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Structure } from '../models/structuresModel';
// import { Structure } from './structure.model';  // Assurez-vous que ce chemin est correct.

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  private apiUrl = 'http://localhost:3000/Structures';  // URL de l'API pour les structures

  constructor(private http: HttpClient) {}

  // Récupérer toutes les structures
  getStructures(): Observable<Structure[]> {
    return this.http.get<Structure[]>(this.apiUrl);
  }

  // Récupérer une structure par ID
  getStructure(id: number): Observable<Structure> {
    return this.http.get<Structure>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle structure
  createStructure(structure: Structure): Observable<Structure> {
    return this.http.post<Structure>(this.apiUrl, structure);
  }

  // Mettre à jour une structure existante
  updateStructure(id: number, structure: Structure): Observable<Structure> {
    return this.http.put<Structure>(`${this.apiUrl}/${id}`, structure);
  }

  // Supprimer une structure
  deleteStructure(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
