import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireServiceService {

  constructor(private http:HttpClient ) { 

  } 
   private domainesUrl = 'http://127.0.0.1:8000/fidalli/domaines/list_domaines';
   private addomainesUrl = 'http://127.0.0.1:8000/fidalli/domaines/create';

   getDomaines(): Observable<any[]> {
    return this.http.get<any[]>(this.domainesUrl);
  }

  addDomaine(domaine: any): Observable<any> {
    return this.http.post(`${this.addomainesUrl}/`, domaine);
  }

}
