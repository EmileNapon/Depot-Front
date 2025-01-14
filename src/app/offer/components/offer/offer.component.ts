import { Component, Input, OnInit } from '@angular/core';  
import { Offer } from '../../models/offer.models';
import { Router } from '@angular/router';  

@Component({  
  selector: 'app-offer',  
  templateUrl: './offer.component.html',  
  styleUrls: ['./offer.component.css']  
})  
export class OfferComponent implements OnInit {  

  @Input() offer!: Offer; // Reçoit les données de l'offre en tant qu'entrée  

  constructor(private router: Router) {} // Injection du service Enterprise  

  ngOnInit(): void {  
    console.log('Offre reçue dans OfferComponent:', this.offer);  

    // Vérification de la validité de l'offre  
    if (!this.offer || !this.offer._id ) {  
        console.error("L'offre n'a pas été correctement chargée ou l'ID est manquant.");  
        return; // Sortie anticipée si l'offre n'est pas valide  
    }  

    console.log('ID de l\'offre reçu (_id) :', this.offer._id);  
    console.log('ID de l\'entreprise à récupérer :', this.offer.enterprise);  
    
}  
}
