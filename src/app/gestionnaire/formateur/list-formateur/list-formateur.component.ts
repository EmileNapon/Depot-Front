import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { CustomUser } from '../models/tousModel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-formateur',
  standalone: true, // Si vous utilisez des composants standalone
  imports: [CommonModule], // Ajoutez CommonModule ici
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {


  
  encadrants: CustomUser[] = [];

  constructor(private utilisateurService: UtilisateurService) { }
  

  ngOnInit(): void {
    this.loadEncadrants();
  }

  loadEncadrants(): void {
    this.utilisateurService.getFormateurs().subscribe((data) => {
      this.encadrants = data;
    });
  }

 




}
