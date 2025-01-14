import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
 

export class DomaineService {

  private domainesUrl = 'http://localhost:8000/fidalli/domaines/list_domaines';
  private matieresUrl = 'http://localhost:9999/matieres';
  private coursUrl= "http://localhost:9999/cours";
  private cours_presentiel="http://localhost:9999/infos_cours_presentiel"

  private cours_webinaire=" http://localhost:9999/webinaires"

  
constructor( private http: HttpClient ) { }
getDomaines(): Observable<any[]> {
  return this.http.get<any[]>(this.domainesUrl);
}

getMatieres(): Observable<any[]> {
  return this.http.get<any[]>(this.matieresUrl);
}



getCours(): Observable<any[]> {
  return this.http.get<any[]>(this.coursUrl);
}

getCours_presentiel(): Observable<any[]> {
  return this.http.get<any[]>(this.cours_presentiel);
}

getWebinaire(): Observable<any[]> {
  return this.http.get<any[]>(this.cours_webinaire);
}

}