import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
    selector: 'app-ajout-encadrant',
    templateUrl: './ajout-encadrant.component.html',
    styleUrls: ['./ajout-encadrant.component.css'],
    standalone: false
})
export class AjoutEncadrantComponent implements OnInit{

  registrationForm!: FormGroup;
  __addDomaine__:boolean=false

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone_number: ['', Validators.required],
      role:'formateur'
    },);
  }

  onSubmit(): void {
    const User={nom:this.registrationForm.value.nom,
                prenom:this.registrationForm.value.prenom, 
                password: this.registrationForm.value.password,
                password2: this.registrationForm.value.password,
                email: this.registrationForm.value.email,
                phone_number: this.registrationForm.value.phone_number,
                role : this.registrationForm.value.role}
    console.log(User)
    if (this.registrationForm.valid) {
      this.utilisateurService.createUser(User).subscribe({
        next: () => {
          this.router.navigate(['/admin/formateur']);
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'encadrant:', err);
          // Vous pouvez également afficher un message d'erreur à l'utilisateur ici.
        }
      });
    }
  }



}
