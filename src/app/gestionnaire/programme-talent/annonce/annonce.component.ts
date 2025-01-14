import { Component } from '@angular/core';
import { Annonce } from '../models/tousModel';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {

  annonces: any[] = [];
  // newAnnonce: Annonce = {
  //   id: 0,
  //   titre: '',
  //   lieu: '',
  //   dateCours: new Date(),
  //   description: '',
  //   datePublication: new Date(),
  //   heure: new Date(),
  // };

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.loadAnnonces();
  }

  // Charger les annonces à partir du service
  loadAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }

  // Ajouter une nouvelle annonce
  // ajouterAnnonce(): void {
  //   this.annonceService.addAnnonce(this.newAnnonce).subscribe(annonce => {
  //     this.annonces.push(annonce);
  //   });
  // }

  // Supprimer une annonce
  supprimerAnnonce(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.annonceService.deleteAnnonce(id).subscribe(() =>  {
        this.loadAnnonces();
      });
      
    }
  }
 

}
