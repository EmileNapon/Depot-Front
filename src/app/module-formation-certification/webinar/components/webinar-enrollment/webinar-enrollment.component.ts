import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebinarService } from '../../services/webinar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebinarEnrollment } from '../../models/webinar-enrollmnet.model';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
  selector: 'app-webinar-enroll',
  templateUrl: './webinar-enrollment.component.html',
  styleUrls: ['./webinar-enrollment.component.css']
})
export class WebinarEnrollComponent implements OnInit {
  enrollForm!: FormGroup;
  webinarId!: string; // Récupéré via l'URL
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null , id:string|null} | null = null;
  constructor(
    private fb: FormBuilder,
    private webinarService: WebinarService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    // Récupération de l'ID du webinaire à partir de l'URL
    this.webinarId = this.route.snapshot.params['id'];
    
    this.enrollForm = this.fb.group({
      firstName: [{ value:this.userInfo?.firstName || '',disabled: true }],
      lastName: [{ value:this.userInfo?.lastName || '', disabled: true }],
      email:[{ value: this.userInfo?.email || '', disabled: true }],
      whatsapp: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    console.log('////')
    
      // Préparer les données d'inscription sans générer d'ID ici
      const webinarEnrollment:  Omit<any, 'id'> = {
        webinarId: Number(this.webinarId),
        user:Number(this.userInfo?.id),
        whatsapp: this.enrollForm.value.whatsapp,
        hasAcceptedTerms: this.enrollForm.value.acceptTerms,
        isConfirmed: true, // Confirmation de l'inscription
        paymentMethod:'orangeMoney',
        paymentStatus: 'free', // Exemples de valeurs par défaut (ajustables selon le cas)
      };

      console.log(webinarEnrollment);
      
      // Enregistrer via le service
      this.webinarService.enrollToWebinar(webinarEnrollment).subscribe({
        next: (response) => {
          this.snackBar.open('Inscription réussie', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.router.navigate(['/webinar-list']);
        },
        error: (err) => {
          this.snackBar.open('Échec de l\'inscription', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }
      });
    }
    register(_id:number):void{
      this.router.navigate([`/webinar-enroll/${_id}/incription`]); 
    }
  }

