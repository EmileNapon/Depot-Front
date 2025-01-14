import { Component, OnInit } from '@angular/core';
import { CustomUser } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DasbordEtudiantService } from 'src/app/dasbord-etudiant/service-model/dasbord-etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  // utilisateurs: Utilisateur[] = [];
  etudiants: any[] = [];

  formationId!:string
  inscrits:any[]=[]
  filteredIncrits:any[]=[]
  Filtresformation:any[]=[]

  FiltresEtudiantParFormation:any[]=[]


  constructor(private utilisateurService: UtilisateurService,  private DasbordService: DasbordEtudiantService,  private route: ActivatedRoute,) { }

  ngOnInit():void{
    this.formationId = this.route.snapshot.params['dasbordId'];
    this.loadUser()
    this.loadInscrits()
   
    
  }


  

  loadInscrits(): void {
    this.DasbordService.getInscrits().subscribe(
      (data) => { 
        this.inscrits = data;
        this.EtudiantParFormation()

      }
    );
  } 

  loadUser():void{
    this.utilisateurService.getEtudiants().subscribe((data) => {
      this.etudiants = data;
    
    });
  }

  EtudiantParFormation(): void {
    if(this.formationId){
      this.Filtresformation= this.inscrits.filter(inscrit => inscrit.formation==this.formationId);
      this.FiltresEtudiantParFormation= this.etudiants.filter(user => this.Filtresformation.some(inscrit => inscrit.user==user.id));
    }
  }




  
}
