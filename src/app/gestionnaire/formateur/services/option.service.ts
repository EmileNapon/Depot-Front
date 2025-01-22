import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private apiUrl = 'http://localhost:8000/api/options'; // Remplacez par l'URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les options
  getOptions(): Observable<Options[]> {
    return this.http.get<Options[]>(this.apiUrl);
  }

  // Récupérer une option par ID
  getOptionById(id: number): Observable<Options> {
    return this.http.get<Options>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle option
  createOption(option: Options): Observable<Options> {
    return this.http.post<Options>(this.apiUrl, option);
  }

  // Mettre à jour une option existante
  updateOption(id: number, option: Options): Observable<Options> {
    return this.http.put<Options>(`${this.apiUrl}/${id}`, option);
  }

  // Supprimer une option
  deleteOption(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
