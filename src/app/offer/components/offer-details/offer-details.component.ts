import { Component, OnInit, Inject } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';  
import { OfferService } from '../../services/offer.service';
import { Offer } from '../../models/offer.models'; 

@Component({
    selector: 'app-offer-details',
    templateUrl: './offer-details.component.html',
    styleUrls: ['./offer-details.component.css'],
    standalone: false
})  
export class OfferDetailsComponent implements OnInit {  
  offer!: Offer; // Détails de l'offre  
  offerId!: string;  
  loading: boolean = true;  

  requirementsList: string[] = [];
  responsibilitiesList: string[] = [];

  constructor(  
    private route: ActivatedRoute,  
    private router: Router,  
    @Inject(OfferService) private offerService: OfferService, 
  ) {}  

  ngOnInit(): void {  
    this.getOfferDetails(); // Appel pour récupérer les détails de l'offre lors de l'initialisation
    this.s()  
  }  

  s(){
    console.log('ID de l\'offre récupérénnnnnnnnnnnnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbnnnn ');  
  }
  // Méthode pour obtenir les détails de l'offre  
  getOfferDetails(): void {  
    const id = this.route.snapshot.paramMap.get('id');  
    
    if (id) {  
      this.offerId = id;  
      this.loading = true;  
      this.offerService.getOfferById(id).subscribe(  
        (data: Offer) => {  
          this.offer = data; // Stocker les données de l'offre  

          // Transformer les champs requirements et responsibilities en tableaux
          this.requirementsList = this.offer.requirements ? this.offer.requirements.split('\n') : [];
          this.responsibilitiesList = this.offer.responsibilities ? this.offer.responsibilities.split('\n') : [];          this.loading = false;  
        },  
        error => {  
          console.error('Erreur lors de la récupération des détails de l\'offre', error);  
          this.loading = false;  
        }  
      );  
    } else {  
      console.error('Aucun ID d\'offre fourni.');  
    }  
  }   

  // Méthode pour gérer l'événement de postulation  
  register(): void {  
    this.router.navigate(['/offers/application', this.offerId]); // Rediriger vers la page de candidature  
  }  
}

