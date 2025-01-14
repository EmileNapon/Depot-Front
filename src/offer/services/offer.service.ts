// recruitment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Offer } from '../models/offer.model';
import { OfferApplication } from '../models/offer-application.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli';
 

  constructor(private http: HttpClient) {}

  // CRUD for Offers

  // Create an offer
  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}/offers`, offer);
  }

  // Get all offers
  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers`);
  }

  // Get all job offers
  getJobs(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers/jobs`);
  }

  // Get all internship offers
  getInternships(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers/internships`);
  }

  // Get offer by ID
  getOfferById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/offers/${id}`);
  }

  // Update an offer by ID
  updateOffer(id: string, offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(`${this.apiUrl}/offers/${id}`, offer);
  }

  // Delete an offer by ID
  deleteOffer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/offers/${id}`);
  }
  
  // // Create an offer application
  // createOfferApplication_1(application: OfferApplication): Observable<OfferApplication> {
  //   return this.http.post<OfferApplication>(`${this.apiUrl}/offer-applications/create`, application);
  // }


  // /**
  //  * Méthode pour soumettre une candidature.
  //  * @param offerApplication L'objet `OfferApplication` contenant les données de la candidature.
  //  * @param files Les fichiers soumis avec la candidature.
  //  * @returns Un Observable pour traiter la réponse du serveur.
  //  */
  // createOfferApplication_2(
  //   offerApplication: OfferApplication,
  //   files: File[]
  // ): Observable<any> {
  //   const formData = new FormData();
  //   // Ajouter les champs texte à formData
  //   formData.append('offerId', offerApplication.offerId);
  //   formData.append('candidatId', offerApplication.candidatId);
  //   formData.append('message', offerApplication.message);

  //   // Ajouter les fichiers
  //   files.forEach((file) => {
  //     formData.append('files', file, file.name);
  //   });

  //   // Faire la requête POST
  //   return this.http.post(`${this.apiUrl}/create`, formData);
  // }

   // Méthode pour créer une nouvelle candidature
   createOfferApplication(offerApplication: OfferApplication, files: File[]): Observable<any> {
    const formData = new FormData();
  
    // Ajouter les champs texte à formData
    formData.append('offer', offerApplication.offer);
    formData.append('candidat', offerApplication.candidat);
    formData.append('message', offerApplication.message);
  
    // Ajouter les fichiers à formData
    files.forEach((file) => {
      formData.append('files', file);
    });
  
    // Faire la requête POST
    return this.http.post(`${this.apiUrl}/offer-applications/create`, formData);
  }
  

  // submitOfferApplication(formData: FormData): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/offer-applications/create`, formData);
  // }


  // Get all applications
  getOfferApplications(): Observable<OfferApplication[]> {
    return this.http.get<OfferApplication[]>(`${this.apiUrl}/offer-applications`);
  }

  // Get job applications
  getJobApplications(): Observable<OfferApplication[]> {
    return this.http.get<OfferApplication[]>(`${this.apiUrl}/offer-applications/jobs`);
  }

  // Get internship applications
  getInternshipApplications(): Observable<OfferApplication[]> {
    return this.http.get<OfferApplication[]>(`${this.apiUrl}/offer-applications/internships`);
  }

  // Get application by ID
  getOfferApplicationById(id: string): Observable<OfferApplication> {
    return this.http.get<OfferApplication>(`${this.apiUrl}/offer-applications/${id}`);
  }

  // Update an application by ID
  updateOfferApplication(id: string, application: OfferApplication): Observable<OfferApplication> {
    return this.http.put<OfferApplication>(`${this.apiUrl}/offer-applications/${id}/update`, application);
  }

  // Delete an application by ID
  deleteOfferApplication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/offer-applications/${id}/delete`);
  }
}
