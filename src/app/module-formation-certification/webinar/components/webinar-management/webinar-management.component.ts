import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-webinar',
    templateUrl: './webinar-management.component.html',
    styleUrls: ['./webinar-management.component.css'],
    standalone: false
})
export class WebinarManagementComponent implements OnInit {

  logout() {
  throw new Error('Method not implemented.');
  }

  login() {
  throw new Error('Method not implemented.');
  }

  isCreateWebinarVisible = false;
  isDashboardVisible = true;
  webinars: any[] = [];
  webinarToUpdateId: string | null = null;
  webinarForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  isLoggedIn: any;


  constructor(
    private fb: FormBuilder,
    private webinarService: WebinarService,
    private router: Router,
  ) {
    this.webinarForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.maxLength(500)]],
      startDateTime: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      webinarUrl: [''],
      maxParticipants: [100, [Validators.required, Validators.min(1)]],
      isPaid: [false],
      price: [0, [Validators.min(0)]],
      type: ['FuturAllies', [Validators.required]],
    });
  }

  getFormJson(): string {
    return JSON.stringify(this.webinarForm.value, null, 2);  // Indentation de 2 espaces pour rendre plus lisible
  }

      // conferencier: ['', [Validators.required]],
      // conferencierPicture_url: [''],
      // moderateur: ['', [Validators.required]],
      // moderateurPicture_url: [''],
       // registrationDeadline: [''],

  onPaidChange(): void {
    const isPaid = this.webinarForm.get('isPaid')?.value;
    if (!isPaid) {
      this.webinarForm.get('price')?.reset();
      this.webinarForm.get('price')?.disable();
    } else {
      this.webinarForm.get('price')?.enable();
    }
  }



  ngOnInit() {
    this.loadWebinars(); // Charger la liste des webinaires au démarrage
  }

  loadWebinars() {
    this.webinarService.getWebinars().subscribe({
      next: (response) => {
        this.webinars = response;
      },
      error: (error) => {
        console.error('Error loading webinars:', error);
      }
    });
  }

  showCreateWebinar() {
    this.isCreateWebinarVisible = true;
    this.isDashboardVisible = false;
  }

  showDashboard() {
    this.isCreateWebinarVisible = false;
    this.isDashboardVisible = true;
    this.webinarToUpdateId = null; // Réinitialiser l'ID de mise à jour lors du retour au tableau de bord
    this.loadWebinars(); 
  }

  editWebinar(webinarId: string) {
    this.webinarService.getWebinarById(webinarId).subscribe({
      next: (webinarToEdit) => {
        this.webinarToUpdateId = webinarId;
        this.webinarForm.patchValue(webinarToEdit);
        this.showCreateWebinar();
      },
      error: (error) => {
        console.error('Error loading webinar for edit:', error);
        this.errorMessage = 'Erreur lors du chargement des informations du webinaire.';
      }
    });
  }

  deleteWebinar(webinarId: string) {
    this.webinarService.deleteWebinar(webinarId).subscribe({
      next: () => {
        console.log('Webinar deleted:', webinarId);
        this.loadWebinars();
      },
      error: (error) => {
        console.error('Error deleting webinar:', error);
      }
    });
  }

  // onSubmit() {
  //   if (this.webinarForm.valid) {
  //     this.isLoading = true;
  //       console.log("lilililililililili",this.webinarForm.value)
  //     if (this.webinarToUpdateId) {
  //       console.log('Editing webinar with ID:', this.webinarToUpdateId);
  //       this.webinarService.editWebinar(this.webinarToUpdateId,this.webinarForm.value).subscribe({
  //         next: (response) => {
  //           console.log('Webinar updated successfully:', response);
  //           this.isLoading = false;
  //           this.showDashboard(); // Affiche le tableau de bord après la mise à jour réussie
  //         },
  //         error: (error) => {
  //           console.error('Error updating webinar:', error);
  //           this.errorMessage = 'Erreur lors de la mise à jour du webinaire.';
  //           this.isLoading = false;
  //         }
  //       });
  //     } else {
  //       console.log('Creating new webinar');
  //       this.webinarService.createWebinar(this.webinarForm.value).subscribe({
  //         next: (response) => {
  //           console.log('Webinar created successfully:', response);
  //           this.isLoading = false;
  //           this.showDashboard(); // Affiche le tableau de bord après la création réussie
  //         },
  //         error: (error) => {
  //           console.error('Error creating webinar:', error);
  //           this.errorMessage = 'Erreur lors de la création du webinaire.';
  //           this.isLoading = false;
  //         }
  //       });
  //     }
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
  
  onSubmit() {
    const formData = this.webinarForm.value;
    
    // Si le webinaire n'est pas payant, mettre price à null
    if (!formData.isPaid) {
      formData.price = 0;
    }

    console.log(formData)
    
    // Envoyer formData à l'API
    this.webinarService.createWebinar(formData).subscribe(response => {
      this.webinarForm.patchValue({ webinarUrl: response.meet_link });
      console.log('Webinaire créé avec succès', response);
      console.log('Webinar created successfully', response);
    }, error => {
      console.error('Error creating webinar', error);
    });
  }


}