import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Enterprise } from '../models/enterprise.model'; // Assurez-vous d'avoir un modèle d'Enterprise défini  

@Injectable({  
  providedIn: 'root'  
})  
export class EnterpriseService {  
  private apiUrl = 'http://127.0.0.1:8000/fidalli/enterprises'; // Remplacez par l'URL de votre API  

  private httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  };  

  constructor(private http: HttpClient) {}  

  // Créer une nouvelle entreprise  
  createEnterprise(enterprise: Enterprise): Observable<Enterprise> {  
    return this.http.post<Enterprise>(`${this.apiUrl}/create`, enterprise, this.httpOptions);  
  }  

  // Récupérer une entreprise par son ID  
  getEnterpriseById(id: string): Observable<Enterprise> {  
    return this.http.get<Enterprise>(`${this.apiUrl}/${id}`);  
  }  

  // Récupérer toutes les entreprises  
  getAllEnterprises(): Observable<Enterprise[]> {  
    return this.http.get<Enterprise[]>(this.apiUrl);  
  }  

  // Mettre à jour une entreprise existante  
  updateEnterprise(id: string, enterprise: Partial<Enterprise>): Observable<Enterprise> {  
    return this.http.put<Enterprise>(`${this.apiUrl}/${id}/update`, enterprise, this.httpOptions);  
  }  

  // Supprimer une entreprise par son ID  
  deleteEnterprise(id: string): Observable<void> {  
    return this.http.delete<void>(`${this.apiUrl}/${id}/delete`);  
  }  
}