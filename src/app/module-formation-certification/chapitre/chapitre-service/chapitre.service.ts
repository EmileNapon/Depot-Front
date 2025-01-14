import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor( private http: HttpClient ) { }
  private chapitreUrl= "http://127.0.0.1:8000/fidalli/chapitre/list_chapitres";
  private sectionUrl= "http://127.0.0.1:8000/fidalli/section/list_sections";
  private contenuUrl= "http://127.0.0.1:8000/fidalli/contenus/list_contenus";


getChapitre(): Observable<any[]> {
  return this.http.get<any[]>(this.chapitreUrl);
  
}

getSection(): Observable<any[]> {
  return this.http.get<any[]>(this.sectionUrl);

}
getContenu(): Observable<any[]> {
  return this.http.get<any[]>(this.contenuUrl);

}
}
