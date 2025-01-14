import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.authService.login(this.f['username'].value, this.f['password'].value).subscribe({
      next: (response) => {
        // Enregistrer le token dans le localStorage
        localStorage.setItem('token', response.token);

        // Mettre à jour le statut de connexion dans le service
        this.authService['loggedInStatus'].next(true);  // Mettre à jour le statut

        // Naviguer vers le tableau de bord
        this.router.navigate(['admin/dashboard']);

        // Afficher une notification de succès
        this.snackBar.open('Connexion réussie', '', { duration: 3000 });
      },
      error: (error) => {
        // Gérer les erreurs de connexion
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
        this.isSubmitting = false;

        // Afficher une notification d'erreur
        this.snackBar.open(this.errorMessage, '', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    });
  }
}
