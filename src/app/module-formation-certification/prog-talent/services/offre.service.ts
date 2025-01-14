import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Offre } from '../models/offresModel';
// import { Offre } from './offre.model';  // Assurez-vous que ce chemin est correct.

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiUrl = 'http://localhost:3000/Offres';  // URL de l'API pour les offres

  constructor(private http: HttpClient) {}


//   ------------- Utiliser un Service pour partager des données
  private offersSource = new BehaviorSubject<Offre[]>([]);
  currentOffers = this.offersSource.asObservable();

//   constructor() {}

  // Méthode pour mettre à jour les offres partagées
  updateOffers(offers: Offre[]) {
    this.offersSource.next(offers);
  }

//  ----------------------------------------------------------------

  // Récupérer toutes les offres
  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.apiUrl);
  }

  // Récupérer une offre par ID
  getOffre(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle offre
  createOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(this.apiUrl, offre);
  }

  // Mettre à jour une offre existante
  updateOffre(id: number, offre: Offre): Observable<Offre> {
    return this.http.put<Offre>(`${this.apiUrl}/${id}`, offre);
  }

  // Supprimer une offre
  deleteOffre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
