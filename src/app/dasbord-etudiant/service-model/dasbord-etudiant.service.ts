import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Inscrit} from "./model"

@Injectable({
  providedIn: 'root'
})
export class DasbordEtudiantService {

  private apiUrl1 = 'http://127.0.0.1:8000/fidalli/inscrit/listes_inscrits/'; // Remplacer par votre API
 private apiUrl2="http://127.0.0.1:8000/fidalli/formation/list-formations/"
  constructor(private http: HttpClient) {}



  getInscrits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }

}
