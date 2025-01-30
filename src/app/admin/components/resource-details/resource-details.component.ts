import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from '../../services/resource.service';
import { Resource, Property } from '../../models/resource.model';
import { ressources } from '../../configs/reource.config';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-resource-details',
    templateUrl: './resource-details.component.html',
    styleUrls: ['./resource-details.component.css'],
    standalone: false
})
export class ResourceDetailsComponent implements OnInit, OnDestroy {
  resourceId!: string;
  resourceType!: string;
  resourceFields!: Property[];
  resource!: any;
  isLoading: boolean = true;
  isDeleting: boolean = false; // Pour gérer l'état de suppression avec le spinner
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private dialog: MatDialog // Injecter le MatDialog pour ouvrir le dialogue
  ) {}

  ngOnInit(): void {
    this.resourceId = this.route.snapshot.paramMap.get('id')!;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType')!;
  
    if (ressources[this.resourceType]) {
      this.resource = ressources[this.resourceType]?.resource;
      this.resourceFields = this.resource.options.properties.showProperties; // Propriétés à afficher
      this.loadResource(this.resourceType, this.resourceId);
    } else {
      this.isLoading = false;
      this.showToast('Type de ressource inconnu', 'error');
    }
  }

  ngOnDestroy(): void {}

  loadResource(resourceType: string, resourceId: string): void {
    this.resourceService.getResource(resourceType, resourceId).subscribe({
      next: (resource) => {
        this.resource = resource;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Impossible de charger les données.';
        this.isLoading = false;
        this.showToast('Erreur lors du chargement', 'error');
      }
    });
  }

  showToast(message: string, type: 'success' | 'error' | 'info'): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: `toast-${type}`
    });
  }

  handleBack(): void {
    this.location.back();
  }

  editResource(): void {
    this.router.navigate([`admin/edit/${this.resourceType}/${this.resourceId}`]);
  }

  deleteResource(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmer la suppression',
        message: `Êtes-vous sûr de vouloir supprimer cette ressource ?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isDeleting = true;  // Afficher le spinner de suppression

        this.resourceService.deleteResource(this.resourceType, this.resourceId).subscribe({
          next: () => {
            this.isDeleting = false; // Masquer le spinner
            this.showToast('Ressource supprimée avec succès', 'success');
            this.location.back();
          },
          error: (err) => {
            this.isDeleting = false; // Masquer le spinner
            this.showToast('Erreur lors de la suppression', 'error');
          }
        });
      }
    });
  }
}
