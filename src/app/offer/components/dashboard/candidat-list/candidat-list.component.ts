import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../../../services/offer.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {
  // Colonnes à afficher dans le tableau
  displayedColumns: string[] = ['candidateName', 'offer', 'date', 'status', 'actions'];

  // Source de données pour le tableau
  dataSource= new MatTableDataSource<any[]>();

  // Filtre de recherche
  filterValue: string = '';

  // Paramètres de l'URL
  offerId: string | null = null;
  offerType: string | null = null;
  offerTitle: string | null = null;
  offerStatus: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.offerId = params['offerId'] || null;
      this.offerType = params['type'] || null;
      this.offerTitle = params['title'] || null;
      this.offerStatus = params['status'] || null;

      // Charger les candidatures en fonction des paramètres
      this.loadCandidatures();
    });
    
  }

  /**
   * Charger les candidatures en fonction des paramètres
   */
  loadCandidatures(): void {
    if (this.offerId) {
      // Si un ID d'offre est fourni, charger les candidatures pour cette offre
      this.offerService.getOfferById(this.offerId).subscribe({
        next: (candidatures) => {
          this.dataSource= candidatures;
          // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.dataSource)
          // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.dataSource.data)
        },
        error: (err) => {
          console.error('Erreur lors du chargement des candidatures :', err);
        }
      });
    } else if (this.offerType) {
      // Si un type d'offre est fourni, charger les candidatures pour ce type
      this.offerService.getOfferApplicationByOfferId(this.offerId).subscribe({
        next: (candidatures) => {
          this.dataSource.data = candidatures;
          
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~',this.dataSource.data)
        },
        error: (err) => {
          console.error('Erreur lors du chargement des candidatures :', err);
        }
      });
    }
  }


  /**
   * Appliquer le filtre de recherche
   */
  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  /**
   * Retourne la classe CSS en fonction du statut de la candidature
   */
  getStatusClass(status: string): string {
    switch (status) {
      case 'En attente':
        return 'status-pending';
      case 'Accepté':
        return 'status-accepted';
      case 'Refusé':
        return 'status-rejected';
      default:
        return '';
    }
  }

  /**
   * Accepter une candidature
   */
  acceptCandidature(candidature: any): void {
    candidature.status = 'Accepté';
    console.log('Candidature acceptée :', candidature);
  }

  /**
   * Refuser une candidature
   */
  rejectCandidature(candidature: any): void {
    candidature.status = 'Refusé';
    console.log('Candidature refusée :', candidature);
  }
}