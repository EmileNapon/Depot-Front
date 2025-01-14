import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Vérifier l'état de connexion directement de manière synchrone
  if (authService.isLoggedIn) {
    return true;  // L'utilisateur est connecté
  } else {
    router.navigate(['/login']);  // Rediriger vers la page de login
    return false;  // L'utilisateur n'est pas autorisé
  }
};
