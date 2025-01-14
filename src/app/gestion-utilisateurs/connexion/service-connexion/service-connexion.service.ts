import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli'; // Base URL de votre API

  private userId: string | null = null;
  private userEmail: string | null = null;
  private userFirstName: string | null = null;
  private userLastName: string | null = null;
  private userProfilePic: string | null = null;
  private userRole: string | null = null; // Ajout de la variable pour le rôle

  constructor(private http: HttpClient) {
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) {
      this.userId = localStorage.getItem('user_id');
      this.userEmail = storedEmail;
      this.userFirstName = localStorage.getItem('user_prenom');
      this.userLastName = localStorage.getItem('user_nom');
      this.userProfilePic = localStorage.getItem('user_profile_pic');
      this.userRole = localStorage.getItem('user_role'); // Récupérer le rôle
    }
  }

  // Méthode de connexion
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login/`;
    const body = { email, password };

    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(map((response: any) => {
      // Adapter les champs en fonction de la structure de votre API
      this.userId = response.id; // Récupération de l'identifiant
      this.userEmail = response.email;
      this.userFirstName = response.prenom; // Prénom
      this.userLastName = response.nom; // Nom
      this.userRole = response.role; // Récupération du rôle

      // Stocker les informations dans le localStorage
      localStorage.setItem('user_id', response.id);
      localStorage.setItem('user_email', response.email);
      localStorage.setItem('user_prenom', response.prenom);
      localStorage.setItem('user_nom', response.nom);
      localStorage.setItem('user_role', response.role); // Stocker le rôle

      return response; // Retourner la réponse complète
    }));
  }

  // Méthode de déconnexion
  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_prenom');
    localStorage.removeItem('user_nom');
    localStorage.removeItem('user_role'); // Retirer le rôle

    // Réinitialiser les variables d'instance
    this.userId = null;
    this.userEmail = null;
    this.userFirstName = null;
    this.userLastName = null;
    this.userProfilePic = null;
    this.userRole = null; // Réinitialiser le rôle
  }

  // Méthode pour obtenir les informations de l'utilisateur
  getUserInfo(): { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null, id: string | null, role: string | null } {
    return {
      id: this.userId,
      email: this.userEmail,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      profilePic: this.userProfilePic,
      role: this.userRole // Ajouter le rôle
    };
  }
}
