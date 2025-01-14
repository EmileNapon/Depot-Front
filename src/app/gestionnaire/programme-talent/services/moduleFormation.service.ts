import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { Module, ModuleFormation } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class ModuleFormationService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/ModuleFormation/list_moduleFormation/'; // Remplacez par l'URL de votre API   
  private apiUrl1 = 'http://127.0.0.1:8000/fidalli/ModuleFormation/create/'
  private baseUrl="http://127.0.0.1:8000/fidalli/formations"
  constructor(private http: HttpClient) { }

  // Récupérer tous les ModuleFormation
  getModuleFormations(): Observable<ModuleFormation[]> {
    return this.http.get<ModuleFormation[]>(this.apiUrl);
  }

  // Récupérer un ModuleFormation par son ID
  getModuleFormationById(id: number): Observable<ModuleFormation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ModuleFormation>(url);
    // return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau ModuleFormation
  addModuleFormation(moduleFormation: any[]): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl1, moduleFormation, { headers });
  }

  // Mettre à jour un ModuleFormation existant
  updateModuleFormation(moduleFormation: ModuleFormation): Observable<ModuleFormation> {
    const url = `${this.apiUrl}/${moduleFormation.id}`;
    return this.http.put<ModuleFormation>(url, moduleFormation);
  }

  // Supprimer un ModuleFormation par son ID




  deleteModuleFormation(formationId: number, moduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${formationId}/modules/${moduleId}/remove/`);
  }

  // Récupère les modules pour une formation spécifique
  // getModulesForFormation(formationId: number): Observable<Module[]> {
  //   return this.http.get<ModuleFormation[]>(`${this.apiUrl}?formation_id=${formationId}`).pipe(
  //     switchMap((moduleFormations: ModuleFormation[]) => {
  //       const moduleIds = moduleFormations.map(mf => mf.module_id);
  //       const moduleRequests = moduleIds.map(id => this.moduleService.getModuleById(id));
  //       return forkJoin(moduleRequests); 
  //     })
  //   );
  // }
}
