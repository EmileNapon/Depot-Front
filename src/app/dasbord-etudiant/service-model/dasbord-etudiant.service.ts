import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Inscrit} from "./model"
import { Webinar } from '../models/webinar.model';
import { WebinarEnrollment } from '../models/webinar-enrollmnet.model';
@Injectable({
  providedIn: 'root'
})
export class DasbordEtudiantService {

  private apiUrl1 = 'http://127.0.0.1:8000/fidalli/inscrit/listes_inscrits/'; // Remplacer par votre API
 private apiUrl2="http://127.0.0.1:8000/fidalli/formation/list-formations/"
 private apiUrl = 'http://127.0.0.1:8000/fidalli/webinars'; // Adresse de l'API pour les webinaires

  constructor(private http: HttpClient) {}



  getInscrits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }

  // Récupérer tous les webinaires
  getWebinars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
    private webinar_inscrit = 'http://127.0.0.1:8000/fidalli/webinars-inscrit'; // Adresse de l'API pour les webinaires

    // Récupérer tous les webinaires
    getWebinarInscrit(): Observable<any[]> {
      return this.http.get<any[]>(this.webinar_inscrit);
    }

}
