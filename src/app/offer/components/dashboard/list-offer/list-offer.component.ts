import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../models/offer.models';
import { OfferService } from '../../../services/offer.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-offer-list',
    templateUrl: './list-offer.component.html',
    styleUrls: ['./list-offer.component.css'],
    standalone: false
})
export class ListOfferComponent implements OnInit, OnDestroy {
  offers: Offer[] = []; // Liste complète des offres
  filteredOffers: Offer[] = []; // Offres filtrées selon le statut et les filtres
  loading: boolean = true; // Indicateur de chargement
  status: string | null = null; // Statut récupéré depuis l'URL
  displayedColumns: string[] = ['title', 'type', 'location', 'actions']; // Colonnes à afficher

  // Filtres
  searchControl = new FormControl(''); // Barre de recherche par titre
  typeFilterControl = new FormControl('all'); // Filtre par type d'offre

  // Abonnements pour éviter les fuites de mémoire
  private routeSubscription: Subscription | undefined;
  private searchSubscription: Subscription | undefined;
  private typeFilterSubscription: Subscription | undefined;

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute, // Pour récupérer le statut depuis l'URL
    private router: Router // Pour naviguer vers les candidatures
  ) {}

  ngOnInit(): void {
    // Récupérer le statut depuis l'URL
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      this.status = params.get('status'); // Récupère le paramètre 'status' de l'URL
      this.getOffers(); // Charge les offres en fonction du statut
    });

    // Réagir aux changements de la barre de recherche et du filtre par type
    this.searchSubscription = this.searchControl.valueChanges.subscribe(() =>
      this.applyFilters()
    );
    this.typeFilterSubscription = this.typeFilterControl.valueChanges.subscribe(
      () => this.applyFilters()
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements pour éviter les fuites de mémoire
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    if (this.typeFilterSubscription) {
      this.typeFilterSubscription.unsubscribe();
    }
  }

  /**
   * Récupère les offres depuis le service
   */
  getOffers(): void {
    this.loading = true;
    this.offerService.getOffers().subscribe(
      (data: Offer[]) => {
        this.offers = data;
        this.applyFilters(); // Applique les filtres après chargement
        this.loading = false;
      },
      (error) => {
        console.error('Erreur lors de la récupération des offres', error);
        this.loading = false;
      }
    );
  }

  /**
   * Applique les filtres (statut, type et recherche)
   */
  applyFilters(): void {
    let filtered = this.offers;

    // Filtre par statut
    if (this.status) {
      filtered = filtered.filter((offer) => offer.status === this.status);
    }

    // Filtre par type d'offre
    const typeFilter = this.typeFilterControl.value;
    if (typeFilter && typeFilter !== 'all') {
      filtered = filtered.filter((offer) => offer.type === typeFilter);
    }

    // Filtre par titre (recherche)
    const searchTerm = this.searchControl.value?.toLowerCase() || '';
    if (searchTerm) {
      filtered = filtered.filter((offer) =>
        offer.title.toLowerCase().includes(searchTerm)
      );
    }

    this.filteredOffers = filtered;
  }

  /**
   * Redirige vers la liste des candidatures pour une offre spécifique
   */
  viewCandidatures(offerId: string): void {
    this.router.navigate([`/dashboard/list-candidat/${offerId}`]);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',offerId)
  }

  /**
   * Redirige vers les détails d'une offre
   */
  viewDetails(offerId: string): void {
    this.router.navigate([`/offers/dashboard/details/${offerId}`]);
  }

  /**
   * Redirige vers la création d'une offre
   */
  createOffer(): void {
    this.router.navigate(['/offers/dashboard/create-offer/indefinie']);
  }
}