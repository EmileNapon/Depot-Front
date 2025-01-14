
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class ModuleService {

constructor( private http: HttpClient ) { }

  private modulesUrl = 'http://localhost:8000/fidalli/modules/list_modules';
  


getModules(): Observable<any[]> {
  return this.http.get<any[]>(this.modulesUrl);
}


  }