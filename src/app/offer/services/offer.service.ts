import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OfferService {
  private apiUrl = 'http://localhost:8000/fidalli';  // L'URL de l'API

  constructor(private http: HttpClient) { }

  // Obtenir toutes les offres
  getOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/offers`);
  }

  // Obtenir tous les emplois
  getJobs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs`);
  }

  // Obtenir tous les stages
  getInternships(): Observable<any> {
    return this.http.get(`${this.apiUrl}/internships`);
  }

  // Obtenir une offre par son ID
  getOfferById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/offers/${id}`);
  }

  // Créer une nouvelle offre
  createOffer(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/offers`, data);
  }

  // Mettre à jour une offre existante
  updateOffer(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/offers/${id}`, data);
  }

  // Supprimer une offre
  deleteOffer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/offers/${id}`);
  }

  // Soumettre une candidature pour une offre
  submitOfferApplication(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/offer-applications`, data);
  }

  // Obtenir toutes les candidatures pour des offres
  getOfferApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/offer-applications`);
  }

  // Obtenir toutes les candidatures pour des emplois
  getJobApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs-applications`);
  }

  // Obtenir toutes les candidatures pour des stages
  getInternshipApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/internships-applications`);
  }

  // Obtenir une candidature pour une offre par son ID
  getOfferApplicationById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/offer-applications/${id}`);
  }

   // Obtenir une candidature pour une offre par son ID
   getOfferApplicationByOfferId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/offer-applications/offer/${id}`);
  }

  // Mettre à jour une candidature pour une offre
  updateOfferApplication(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/offer-applications/${id}`, data);
  }

  // Supprimer une candidature pour une offre
  deleteOfferApplication(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/offer-applications/${id}`);
  }

  // Obtenir les statistiques d'offres
  getOfferStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/offer-stats`);
  }

  // Créer une nouvelle statistique pour une offre
  createOfferStat(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/offer-stats`, data);
  }

  // Obtenir une statistique d'offre par son ID
  getOfferStatById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/offer-stats/${id}`);
  }

  // Mettre à jour une statistique d'offre
  updateOfferStat(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/offer-stats/${id}`, data);
  }

  // Supprimer une statistique d'offre
  deleteOfferStat(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/offer-stats/${id}`);
  }
}
