import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfferService } from '../../services/offer.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Pour les notifications de barre de message
import { ActivatedRoute, Router } from '@angular/router'; // Pour récupérer les paramètres de la route
import { Offer } from '../../models/offer.model';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
  selector: 'app-offer-application',
  templateUrl: './offer-application.component.html',
  styleUrls: ['./offer-application.component.css'],
})
export class OfferApplicationComponent implements OnInit {
  applicationForm!: FormGroup;
  offerId!: string;  // ID de l'offre obtenue de la route
  userId!: any // Remplacez par l'ID utilisateur réel
  offer!: Offer;
  cvFile?: { file: File; progress: number; name: string };
  lmFile?: { file: File; progress: number; name: string };
  otherFiles: { file: File; progress: number; name: string }[] = []; // Stocke d'autres fichiers avec leur progression
  canAddOthersDoc: boolean = false;
  isRequiredCvDoc: boolean = false;
  isRequiredMlDoc: boolean = false;
  isSubmitting: boolean = false;

  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null,id: string | null } | null = null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private offerService: OfferService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private serviceAuth: AuthService,
  ) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('id') || '';
    this.userInfo = this.serviceAuth.getUserInfo();
    this.userId=this.userInfo.id;
    if (!this.offerId) {
      this.snackBar.open('ID de l\'offre manquant.', 'Fermer', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    this.initializeForm();
    this.getOfferDetails();
  }

  // Récupérer les détails de l'offre
  getOfferDetails(): void {
    this.offerService.getOfferById(this.offerId).subscribe({
      next: (offer) => {
        this.offer = offer;
        this.isRequiredCvDoc = offer.is_required_cv_doc;
        this.isRequiredMlDoc = offer.is_required_ml_doc;
        this.canAddOthersDoc = offer.can_add_others_doc;
        console.log('33333333333',this.isRequiredMlDoc)
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'offre:', err);
        this.snackBar.open('Erreur lors de la récupération des détails de l\'offre.', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
        });
      },
    });
  }

  // Initialisation du formulaire
  initializeForm(): void {
    this.applicationForm = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(500)]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  // Gestion des fichiers
  onFileSelected(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const fileData = { file, progress: 0, name: file.name };

      switch (type) {
        case 'CV':
          this.cvFile = fileData;
          this.uploadFile(fileData);
          break;
        case 'LM':
          this.lmFile = fileData;
          this.uploadFile(fileData);
          break;
        case 'OTHER':
          this.otherFiles.push(fileData);
          this.uploadFile(fileData);
          break;
        default:
          console.warn('Type de fichier inconnu:', type);
      }
    }
  }

  uploadFile(fileData: { file: File; progress: number; name: string }): void {
    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        fileData.progress = progress;
      }
    };
    
    reader.onload = () => {
      fileData.progress = 100;   
    };

    reader.readAsArrayBuffer(fileData.file);
  }

  // Ajouter un autre champ de fichier
  addOtherFileField(): void {
    const newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.accept = '.pdf,.doc,.docx';
    newFileInput.classList.add('hidden');
    newFileInput.addEventListener('change', (event) => this.onFileSelected(event, 'OTHER'));
    const container = document.getElementById('otherFilesContainer');
    if (container) {
      container.insertBefore(newFileInput, document.getElementById('addFileButton'));
      newFileInput.click();
    }
  }

  onSubmit(): void {
    if (this.applicationForm.invalid || (this.isRequiredCvDoc && !this.cvFile) || (this.isRequiredMlDoc && !this.lmFile)) {
      // Si le formulaire est invalide, signaler l'erreur immédiatement
      this.snackBar.open('Veuillez remplir tous les champs obligatoires et télécharger les fichiers nécessaires.', 'Fermer', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
  
    this.isSubmitting = true;
  
    // Logique de soumission du formulaire (inchangée)
    const offerApplication = {
      offer: this.offerId,
      candidat: this.userId,
      message: this.applicationForm.value.message,
      application_date: new Date(),
      status: 'Pending',
      last_updated: new Date(),
      submitted_documents_ids: [],
      created_at: new Date()
    };


    const files: File[] = [
      this.cvFile?.file,
      this.lmFile?.file,
      ...this.otherFiles.map(f => f.file)
    ].filter((file): file is File => file !== undefined);
  
    this.offerService.createOfferApplication(offerApplication, files).subscribe({
      next: (response) => {
        this.snackBar.open('Candidature soumise avec succès !', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
        });
        this.isSubmitting = false;
        this.router.navigate(['/offers']);
      },
      error: (err) => {
        console.error('Erreur lors de la soumission de la candidature:', err);
        this.snackBar.open('Erreur lors de la soumission de la candidature.', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
        });
        this.isSubmitting = false;
      },
    });

    console.log(',,,,,,,,,,,,,,,,,,,,,,,', offerApplication)
  }
  

}
