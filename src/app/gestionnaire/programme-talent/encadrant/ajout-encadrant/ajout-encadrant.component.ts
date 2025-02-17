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
    },);
  }


  imageUrl: string | ArrayBuffer | null = null;  // Cette variable va contenir l'URL de l'image.

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



  onFileChange(event: any) {
    this.selectedFile = event.target.files[0]; // Sélectionner le premier fichier
    this.registrationForm.patchValue({
      file: this.selectedFile,                // Mettre à jour le formulaire avec le fichier sélectionné
    });
  }
  onSubmit(): void {

    const User={nom:this.registrationForm.value.nom,
                prenom:this.registrationForm.value.prenom, 
                email: this.registrationForm.value.email,
                phone_number: this.registrationForm.value.phone_number,
                password: this.registrationForm.value.phone_number,
                role : this.registrationForm.value.role,
                specialite:this.registrationForm.value.specialite,
                fonction: this.registrationForm.value.fonction,
                profile_pic:this.selectedFile
              }
    console.log(User,'//////////////////')
   



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
