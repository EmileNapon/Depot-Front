import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResourceService } from '../../services/resource.service';
import { Resource, Property } from '../../models/resource.model';
import { ressources } from '../../configs/reource.config';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  resource!: Resource;
  resourceFieldsToEdit!: Property[];  // Liste des propriétés à afficher pour la création
  resourceType!: string;
  isSubmitting: boolean = false;  // Pour gérer le spinner de soumission

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog // Injecter le MatDialog pour ouvrir le dialogue de confirmation
  ) {}

  ngOnInit(): void {
    this.resourceType = this.route.snapshot.paramMap.get('resourceType')!;
    this.loadResource();
    this.initializeForm();

  }

  ngOnDestroy(): void {
    // Nettoyage si nécessaire
  }

  private loadResource(): void {
    console.log('champs a editer')
    this.resource = ressources[this.resourceType]?.resource;
    this.resourceFieldsToEdit = this.resource.options.properties.editProperties;
    console.log('champs a editer', this.resourceFieldsToEdit)
    if (!this.resource) {
      console.error('Ressource introuvable');
      this.location.back();  // Rediriger vers la page d'accueil si la ressource est introuvable
    }
  }




  private passwordsMatchValidator(formGroup: any): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirm_password')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  private initializeForm(): void {
    const formControls: any = {};
    // const fieldsConfig =  this.resourceFieldsToEdit;

    this.resourceFieldsToEdit.forEach((field) => {
        console.log(field);  // Ajoutez cette ligne pour vérifier les donnée
      const controlValidators = field.required ? [Validators.required] : [];
      if (field.type === 'email') {
        controlValidators.push(Validators.email);
      }
      if (field.type === 'password') {
        controlValidators.push(Validators.minLength(6));
      }
      formControls[field.name] = ['', controlValidators];
    });

    this.form = this.fb.group(formControls, {
      validators: this.passwordsMatchValidator // Ajouter le validateur pour la correspondance des mots de passe
    });
  }

  handleFileInput(event: Event, fieldName: string): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files) {
      this.form.get(fieldName)?.setValue(inputElement.files);
    }
  }

  handleSubmit(): void {
    if (this.form.valid) {
      // Afficher l'overlay
      this.isSubmitting = true;  
  
      // Ouvrir la boîte de dialogue de confirmation avant d'envoyer le formulaire
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title: 'Confirmer la soumission',
          message: 'Êtes-vous sûr de vouloir soumettre ces informations ?'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Si l'utilisateur confirme, on soumet le formulaire
          const formData = this.form.value;
          this.resourceService.createResource(this.resourceType, formData).subscribe({
            next: (response) => {
              this.isSubmitting = false;  // Masquer l'overlay
              this.snackBar.open('Ressource créée avec succès!', 'Fermer', { duration: 3000, panelClass: 'toast-success' });
              this.location.back();
              // this.router.navigate([`/admin/${this.resourceType}`]);  
            },
            error: (error) => {
              this.isSubmitting = false;  // Masquer l'overlay
              this.snackBar.open('Erreur lors de la création de la ressource', 'Fermer', { duration: 3000, panelClass: 'toast-error' });
            }
          });
        } else {
          // L'utilisateur a annulé, masquer le spinner
          this.isSubmitting = false;
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  

  handleCancel(): void {
    this.location.back(); // Retour à la page précédente
  }
}
