import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomUser, Group } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://127.0.0.1:8000/fidalli/formation/list_users/';  // URL vers votre fichier JSON ou API
  private groupesUrl = 'http://localhost:3000/Groups';  // URL vers l'API pour les groupes

  constructor(private http: HttpClient) { }

  // Méthode générique pour récupérer tous les utilisateurs
  getUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour filtrer par rôle
  getUtilisateursByRole(role: 'etudiant' | 'employeur' | 'formateur'): Observable<CustomUser[]> {
    return this.getUtilisateurs().pipe(
      map((utilisateurs: CustomUser[]) => utilisateurs.filter(utilisateur => utilisateur.role === role))
    );
  }

  // Méthodes spécifiques utilisant le filtre par rôle
  getEtudiants(): Observable<CustomUser[]> {
    return this.getUtilisateursByRole('etudiant');
  }

  getEmployeurs(): Observable<CustomUser[]> {
    return this.getUtilisateursByRole('employeur');
  }

  getFormateurs(): Observable<CustomUser[]> {
    return this.getUtilisateursByRole('formateur');
  }

  // Création d'un utilisateur (par exemple un formateur)
  createUser(newUser: CustomUser): Observable<CustomUser> {
    return this.http.post<CustomUser>(this.apiUrl, newUser);
  }

  // Modification d'un utilisateur
  updateUser(id: number, updatedUser: CustomUser): Observable<CustomUser> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CustomUser>(url, updatedUser);
  }

  // Suppression d'un utilisateur
  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Méthode pour sauvegarder les groupes
  saveGroupes(groupes: Group[]): Observable<Group> {
    return this.http.post<Group>(this.groupesUrl, groupes);
  }

  // Méthode pour récupérer les groupes
  getGroupes(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupesUrl);
  }
}
