import { Component, OnInit } from '@angular/core';
import { CustomUser } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-encadrant',
  templateUrl: './encadrant.component.html',
  styleUrls: ['./encadrant.component.css']
})
export class EncadrantComponent implements OnInit {

  encadrants: CustomUser[] = [];

  constructor(private utilisateurService: UtilisateurService) { }
  
  // ngOnInit():void{

  //   this.utilisateurService.getEncadrants().subscribe((data: Encadrant[]) => {
  //     this.encadrants = data;
  //   });
  // }

  ngOnInit(): void {
    this.loadEncadrants();
  }

  loadEncadrants(): void {
    this.utilisateurService.getFormateurs().subscribe((data) => {
      this.encadrants = data;
    });
  }

  deleteEncadrant(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet encadrant ?')) {
      this.utilisateurService.deleteUser(id).subscribe(() => {
        this.loadEncadrants(); 
      });
    }
  }


}