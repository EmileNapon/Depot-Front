import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceConnexionPrincipale {
  private loggedIn = false; // État de connexion

  constructor() {}

  // Méthode pour se connecter
  login(): void {
    this.loggedIn = true;
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.loggedIn = false;
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
