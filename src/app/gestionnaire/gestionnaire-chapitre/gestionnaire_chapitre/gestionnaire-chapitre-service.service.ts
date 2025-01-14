import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireChapitreServiceService {


  private chapitresUrl = 'http://127.0.0.1:8000/fidalli/chapitre/list_chapitres';
  private adchapitresUrl = 'http://127.0.0.1:8000/fidalli/chapitre/create';
  private sectionUrl= "http://127.0.0.1:8000/fidalli/section/list_sections";
  constructor( private http: HttpClient ) { }

  
  getChapitre(): Observable<any[]> {
    return this.http.get<any[]>(this.chapitresUrl);
  }

  addChapitre(cour: any): Observable<any> {
    return this.http.post(`${this.adchapitresUrl}/`, cour);
  }

  getSection(): Observable<any[]> {
    return this.http.get<any[]>(this.sectionUrl);
  
  }



  private contenuUrl= "http://127.0.0.1:8000/fidalli/contenus/list_contenus";


  getcontenu(): Observable<any[]> {
    return this.http.get<any[]>(this.contenuUrl);
  
}
AddContenu(): Observable<any[]> {
  return this.http.get<any[]>(this.contenuUrl);

}

}
