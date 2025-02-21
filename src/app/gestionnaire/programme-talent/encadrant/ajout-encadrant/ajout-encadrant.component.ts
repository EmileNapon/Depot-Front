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
      phone_number: ['', Validators.required],
      image: ['', Validators.required],
      specialite:['', Validators.required],
      fonction:['', Validators.required],
      role:'formateur', 
      profile_pic:[null],
    });
  }

cool:string='jjjjjjjjjjj'
  // imageUrl: string | ArrayBuffer | null = null;  // Cette variable va contenir l'URL de l'image.

  // // Fonction pour traiter le fichier image sélectionné
  // onImageSelected(event: any): void {
  //   const file = event.target.files[0];  // Récupérer le premier fichier
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageUrl = reader.result;  // Charger l'image en base64
  //     };
  //     reader.readAsDataURL(file);  // Lire l'image comme URL en base64
  //   }
  // }

  selectedFile: File | null = null;


  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }


  onSubmit(): void {
                const formData = new FormData();

                formData.append('email', this.registrationForm.value.email);
                formData.append('nom', this.registrationForm.value.nom);
                formData.append('prenom', this.registrationForm.value.prenom);
                formData.append('phone_number', this.registrationForm.value.phone_number);
                formData.append('password', this.registrationForm.value.phone_number);
                formData.append('role', this.registrationForm.value.role);
                formData.append('fonction', this.registrationForm.value.fonction);
                formData.append('specialite', this.registrationForm.value.specialite);
                // Ajouter l'image si elle est sélectionnée
                if (this.selectedFile) {
                  formData.append('profile_pic', this.selectedFile, this.selectedFile.name);
                }

                formData.forEach((value, key) => {
                  console.log(`${key}: ${value}`);
                });
                this.utilisateurService.createUser(formData).subscribe((response) => {
                  console.log('Utilisateur enregistré avec succès', response);
                });     
            }
  }

