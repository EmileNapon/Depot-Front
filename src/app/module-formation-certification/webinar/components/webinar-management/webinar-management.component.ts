import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-webinar',
  templateUrl: './webinar-management.component.html',
  styleUrls: ['./webinar-management.component.css']
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
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      speaker: ['', [Validators.required]],
      speakerPicture_url: [''],
      startDateTime: ['', [Validators.required]],
      endDateTime: ['', [Validators.required]],
      registrationDeadline: [''],
      webinarUrl: [''],
      maxParticipants: [100, [Validators.required, Validators.min(1)]],
      isPaid: [false],
      price: [0, [Validators.min(0)]],
      type: ['FuturAllies', [Validators.required]],
    });
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

  onSubmit() {
    if (this.webinarForm.valid) {
      this.isLoading = true;
  
      const webinar: Webinar = new Webinar(
        this.webinarToUpdateId || '', // Utiliser l'ID si en mode édition
        this.webinarForm.value.title,
        this.webinarForm.value.speaker,
        new Date(this.webinarForm.value.startDateTime),
        new Date(this.webinarForm.value.endDateTime),
        this.webinarForm.value.maxParticipants,
        this.webinarForm.value.isPaid,
        this.webinarForm.value.type,
        this.webinarForm.value.description,
        this.webinarForm.value.speakerPicture_url,
        this.webinarForm.value.registrationDeadline ? new Date(this.webinarForm.value.registrationDeadline) : undefined,
        this.webinarForm.value.webinarUrl,
        this.webinarForm.value.isPaid ? this.webinarForm.value.price : undefined,
      );
  
      console.log('Submitting webinar:', webinar);
      
      if (this.webinarToUpdateId) {
        console.log('Editing webinar with ID:', this.webinarToUpdateId);
        this.webinarService.editWebinar(this.webinarToUpdateId, webinar).subscribe({
          next: (response) => {
            console.log('Webinar updated successfully:', response);
            this.isLoading = false;
            this.showDashboard(); // Affiche le tableau de bord après la mise à jour réussie
          },
          error: (error) => {
            console.error('Error updating webinar:', error);
            this.errorMessage = 'Erreur lors de la mise à jour du webinaire.';
            this.isLoading = false;
          }
        });
      } else {
        console.log('Creating new webinar');
        this.webinarService.createWebinar(webinar).subscribe({
          next: (response) => {
            console.log('Webinar created successfully:', response);
            console.log(webinar);
            this.isLoading = false;
            this.showDashboard(); // Affiche le tableau de bord après la création réussie
          },
          error: (error) => {
            console.error('Error creating webinar:', error);
            this.errorMessage = 'Erreur lors de la création du webinaire.';
            this.isLoading = false;
          }
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
  
}