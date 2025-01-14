import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/modules/list_modules'; // Remplacer par votre API

  constructor(private http: HttpClient) {}

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.apiUrl);
  }

  getModuleById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }

//   addModule(module: Module): Observable<Module> {
//     return this.http.post<Module>(this.apiUrl, module);
//   }

  // Ajouter un module
  addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(`${this.apiUrl}`, module);
  }

  updateModule(module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/${module.id}`, module);
  }

  deleteModule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
