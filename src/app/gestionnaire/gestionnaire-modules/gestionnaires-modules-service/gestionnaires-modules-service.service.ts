import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionnairesModulesServiceService {

  constructor(private http:HttpClient ) { 

  } 
   private modulesUrl = 'http://127.0.0.1:8000/fidalli/modules/list_modules';
   private adModulesUrl = 'http://127.0.0.1:8000/fidalli/modules/create';

   getModule(): Observable<any[]> {
    return this.http.get<any[]>(this.modulesUrl);
  }

  addModule(module: any): Observable<any> {
    return this.http.post(`${this.adModulesUrl}/`, module);
  }

}
