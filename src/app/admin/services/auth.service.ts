import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/fapi'; // Mettez l'URL de votre API ici
  private loggedInStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  // Getter pour accéder à l'état de la connexion
  get isLoggedIn(): Observable<boolean> {
    return this.loggedInStatus.asObservable();
  }

  // Méthode pour se connecter
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/admin-login`, { username, password })
      .pipe(
        catchError(error => {
          console.error('Erreur de login:', error);
          throw error;  // Relance l'erreur pour gestion ultérieure dans le composant
        })
      );
  }
  
    // Après le login, sauvegarder le token dans localStorage
    loginSuccess(token: string): void {
      localStorage.setItem('token', token);  // Sauvegarde du token
      this.loggedInStatus.next(true); // Mettez à jour l'état de la connexion
    }
  
    // Méthode pour récupérer les informations de l'utilisateur
    getUserInfo(): Observable<any> {
      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/profile`, { headers });
      } else {
        return new Observable(); // Retourne un observable vide si pas de token
      }
    }
  
    getUserInfoById(userId: string): Observable<any> {
        const token = localStorage.getItem('token');
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          return this.http.get(`${this.apiUrl}/users/${userId}`, { headers });
        } else {
          return new Observable(); // Retourne un observable vide si pas de token
        }
      }
      
    // Méthode pour se déconnecter
    logout() {
      if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
      }
      this.loggedInStatus.next(false);
  
      if (this.router) {
          this.router.navigate(['/login']).then(success => {
              if (success) {
                  console.log('Navigation réussie!');
              } else {
                  console.error('La navigation a échoué.');
              }
          }).catch(err => {
              console.error('Erreur lors de la navigation:', err);
          });
      } else {
          console.error('Le router est null.');
      }
    }
  
  }
