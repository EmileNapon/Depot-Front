import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ResourceService } from '../../services/resource.service';
import { Resource, Property } from '../../models/resource.model';
import { ressources } from '../../configs/reource.config';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css'],
})
export class ResourceEditComponent implements OnInit, OnDestroy {

  resource!: any;
  resourceFieldsToEdit!: Property[];
  resourceId!: string;
  resourceType!: string;
  loading = false;
  resourceToEdit: any = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.resourceId = this.route.snapshot.paramMap.get('id')!;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType')!;
    console.log(`Log: [La resource] :`, this.resourceType);
    console.log(`Log: [Id de la resource] :`, this.resourceId);
    this.resource = ressources[this.resourceType]?.resource;
    this.resourceFieldsToEdit = this.resource.options.properties.editProperties;
    
    this.initializeForm();
    if (this.resourceId) {
      this.loadResource(this.resourceType, this.resourceId);
    } else {
      this.isLoading = false;
      this.showToast('ID resource manquant', 'error');
    }
  }

  ngOnDestroy(): void {}

  private initializeForm(): void {
    const formControls: any = {};

    this.resourceFieldsToEdit.forEach(field => {
      const validators = [field.required ? Validators.required : null].filter(v => v !== null);
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      if (field.type === 'password') {
        validators.push(Validators.minLength(8));
      }
      formControls[field.name] = ['', validators];
    });

    // Custom validation (e.g., for password confirmation)
    this.form = this.fb.group(formControls, { validators: [this.passwordMatchValidator] });

  }

  private populateForm(): void {
    if (this.resourceToEdit) {
      const formValues: any = {};
      this.resourceFieldsToEdit.forEach(field => {
        if (this.resourceToEdit[field.name] !== undefined) {
          formValues[field.name] = this.resourceToEdit[field.name];
  
        }
      });
      this.form.patchValue(formValues); // Remplir le formulaire avec les données de resourceToEdit
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  };

  loadResource(resourceType: string, resourceId: string): void {
    this.resourceService.getResource(resourceType, resourceId).subscribe({
      next: (resource) => {
        this.resourceToEdit = resource;
        this.isLoading = false;
        this.populateForm();  // Populer le formulaire avec les données chargées
        
      },
      error: (err) => {
        this.errorMessage = 'Impossible de charger les données.';
        this.isLoading = false;
        this.showToast('Erreur lors du chargement', 'error');
      }
    });
  }

  onSubmit(updatedData: any): void {
    if (!this.resourceToEdit || !updatedData) {
      this.showToast('Données invalides', 'error');
      return;
    }
    if (!this.resourceToEdit.id) {
      this.showToast('L\'ID est manquant', 'error');
      return;
    }
    // Afficher le spinner
    this.isLoading = true;
    this.resourceService.updateResource(this.resourceType, this.resourceToEdit.id, updatedData).subscribe({
      next: () => {
        // Masquer le spinner après mise à jour réussie
        this.isLoading = false;
        this.showToast('Mise à jour réussie', 'success');
        this.location.back();
      },
      error: () => {
        // Masquer le spinner en cas d'erreur
        this.isLoading = false;
        this.showToast('Erreur lors de la mise à jour', 'error');
      }
    });
  }
  
  

  handleSubmit(): void {
    if (this.form.valid) {
      this.onSubmit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  handleCancel(): void {
    this.location.back();
    this.showToast('Modification annulée', 'info');
  }

  handleBack(): void {
    this.location.back();
  }

  showToast(message: string, type: 'success' | 'error' | 'info'): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: `toast-${type}`
    });
  }

  handleFileInput(event: Event, fieldName: string): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files) {
      this.form.get(fieldName)?.setValue(inputElement.files);
    }
  }
}
