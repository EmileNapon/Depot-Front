import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor( private http: HttpClient ) { }
  private coursUrl= "http://localhost:8000/fidalli/cours/list_cours";
  getCours(): Observable<any[]> {
    return this.http.get<any[]>(this.coursUrl);
  }
  
}
