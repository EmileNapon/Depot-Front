import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { Module, ModuleFormation } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class ModuleFormationService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/ModuleFormation/list_moduleFormation/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Récupérer tous les ModuleFormation
  getModuleFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // // Récupérer un ModuleFormation par son ID
  // getModuleFormationById(id: number): Observable<ModuleFormation> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<ModuleFormation>(url);
  //   // return this.http.get<Module>(`${this.apiUrl}/${id}`);
  // }

  // // Ajouter un nouveau ModuleFormation
  // addModuleFormation(moduleFormation: ModuleFormation): Observable<ModuleFormation> {
  //   return this.http.post<ModuleFormation>(this.apiUrl, moduleFormation);
  // }

  // // Mettre à jour un ModuleFormation existant
  // updateModuleFormation(moduleFormation: ModuleFormation): Observable<ModuleFormation> {
  //   const url = `${this.apiUrl}/${moduleFormation.id}`;
  //   return this.http.put<ModuleFormation>(url, moduleFormation);
  // }

  // // Supprimer un ModuleFormation par son ID
  // deleteModuleFormation(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<void>(url);
  // }


}
