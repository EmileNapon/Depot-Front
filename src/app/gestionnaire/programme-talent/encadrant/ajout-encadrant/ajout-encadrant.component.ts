import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-ajout-encadrant',
  templateUrl: './ajout-encadrant.component.html',
  styleUrls: ['./ajout-encadrant.component.css']
})
export class AjoutEncadrantComponent implements OnInit{

  encadrantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    this.encadrantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      role: ['encadrant', Validators.required],
      specialite: ['', Validators.required],
      annee_experience: ['', [Validators.required, Validators.min(0)]],
      niveau_etudes: ['', Validators.required],
      statut: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.encadrantForm.patchValue({role: "encadrant"});
  }

  createEncadrant(): void {
    if (this.encadrantForm.valid) {
      this.utilisateurService.createUser(this.encadrantForm.value).subscribe({
        next: () => {
          this.router.navigate(['/gestionnaire/dasbord-prog-talent']);
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'encadrant:', err);
          // Vous pouvez également afficher un message d'erreur à l'utilisateur ici.
        }
      });
    }
  }

}
