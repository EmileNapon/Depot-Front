
import { UtilisateurService } from '../../../../gestionnaire/programme-talent/services/utilisateur.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../../../services/offer.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-candidat-list',
    templateUrl: './candidat-list.component.html',
    styleUrls: ['./candidat-list.component.css'],
    standalone: false
})
export class CandidatListComponent implements OnInit {
  // Colonnes à afficher dans le tableau
  displayedColumns: string[] = ['candidateName', 'offer', 'date', 'status', 'actions'];

  // Source de données pour le tableau
  dataSource= new MatTableDataSource<any>();

  // Filtre de recherche
  filterValue: string = '';

  // Paramètres de l'URL
  offerId: string | null = null;
  offerType: string | null = null;
  offerTitle: string | null = null;
  offerStatus: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private utilisateurService: UtilisateurService, 
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
        if (Array.isArray(candidatures)) {
          this.dataSource = new MatTableDataSource(candidatures); // Crée une instance avec les données
          this.loadUser()
        } else {
          console.error('Les candidatures reçues ne sont pas un tableau 11 :', candidatures);
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des candidatures :', err);
      },
    });

    this.offerService.getOfferApplicationByOfferId(this.offerId).subscribe({
      next: (candidatures) => {
        if (Array.isArray(candidatures)) {
          this.dataSource = new MatTableDataSource(candidatures); // Crée une instance avec les données
          console.error('Les candidatures reçues ne sont pas un tableau 1 :', candidatures);
          this.loadUser()
        } else {
          console.error('Les candidatures reçues ne sont pas un tableau :', candidatures);
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des candidatures :', err);
      },
    });
    
  } 
}



FiltresOffer:any[]=[]
etudiants:any[]=[]
FiltresEtudiantParOffer:any[]=[]


loadUser():void{
  this.utilisateurService.getEtudiants().subscribe((data) => {
    this.etudiants = data;
    this.EtudiantParFormation()
    console.log('Candidatures filtrées :', this.dataSource.data);
  
  });
}
nouveau_donnees:any[]=[]
EtudiantParFormation(): void {
    // Filtrer les candidatures par formation
    this.FiltresOffer = this.dataSource.data.filter(inscrit => inscrit.offer == this.offerId);
    // Obtenir les IDs des utilisateurs associés aux candidatures filtrées
    const userIds = new Set(this.FiltresOffer.map((inscrit) => inscrit.candidat));
    // Filtrer les étudiants par les IDs trouvés
    this.FiltresEtudiantParOffer = this.etudiants.filter((user) =>
      userIds.has(user.id)
    );


    this.nouveau_donnees = this.FiltresOffer.map(elementInscrit => {
      // Chercher l'objet correspondant dans data2
      const item2= this.etudiants.find(id2 => id2.id === elementInscrit.candidat);
      return { ...elementInscrit, ...item2 };  // Fusionner les objets item1 et item2
  });


    // Debugging : Afficher les résultats dans la console
    console.log('Candidatures filtrées m:', this.nouveau_donnees);
    console.log('Étudiants filtrés :', this.offerId);
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