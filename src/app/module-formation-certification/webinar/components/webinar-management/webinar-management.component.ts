
import { CustomUser } from './../../../prog-talent/models/tousModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';
import { Router, TitleStrategy } from '@angular/router';
import { UtilisateurService } from 'src/app/gestionnaire/formateur/services/utilisateur.service';

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
  encadrants: CustomUser[] = [];
  encadrantsFiltres: CustomUser[] = [];
  constructor(
    private fb: FormBuilder,
    private webinarService: WebinarService,
    private router: Router,
    private utilisateurService: UtilisateurService
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
      contractor:['', [Validators.required]],
      moderateurs:['', [Validators.required]],
    });
  }

  getFormJson(): string {
    return JSON.stringify(this.webinarForm.value, null, 2);  // Indentation de 2 espaces pour rendre plus lisible
  }


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
    this.loadEncadrants()
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

  loadEncadrants(): void {
    this.utilisateurService.getFormateurs().subscribe((data) => {
      this.encadrants = data;
      this.filDataEncadrant()
    });
  }
  filDataEncadrant(){
  
  this.encadrantsFiltres=this.encadrants.filter(user=>user.role=='formateur')
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
    const formData = this.webinarForm.value;
    
    // Si le webinaire n'est pas payant, mettre price à null
    if (!formData.isPaid) {
      formData.price = 0;
    }

    console.log('oooooooooooo',formData)
    
    // Envoyer formData à l'API
    this.webinarService.createWebinar(formData).subscribe(response => {
      // this.webinarForm.patchValue({ webinarUrl: response.meet_link });
      console.log('Webinaire créé avec succès', response);
      this.webinarForm.reset();
    }, error => {
      console.error('Error creating webinar', error);
    });
  }



isTitleDesc:boolean=true
isStartDuree:boolean=false
isUrlMax:boolean=false
isConfMode:boolean=false
isVisible: boolean=false


continuer1(){
  this.isTitleDesc=false
  this.isStartDuree=true

}

continuer2(){
  this.isStartDuree=false
  this.isUrlMax=true
}

continuer3(){
  this.isUrlMax=false
  this.isConfMode=true
  this.isVisible=true
}



}