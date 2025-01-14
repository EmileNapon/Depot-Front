import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomUser, Group } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-groupe-etudiant',
  templateUrl: './groupe-etudiant.component.html',
  styleUrls: ['./groupe-etudiant.component.css']
})
export class GroupeEtudiantComponent implements OnInit {

  groupForm: FormGroup;
  etudiants: CustomUser[] = [];
  groupes: CustomUser[][] = [];  // Groupes d'étudiants
  groupesIds: Group[] = []; // Sous-groupes enregistrés avec IDs

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService
  ) {
    // Initialisation du formulaire avec la saisie du nombre de groupes
    this.groupForm = this.fb.group({
      nombreGroupes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Charger la liste des étudiants via le service
    this.utilisateurService.getEtudiants().subscribe((etudiants: CustomUser[]) => {
      this.etudiants = etudiants;
    });
  }

  // Fonction pour diviser les étudiants en plusieurs groupes
  diviserEtudiantsEnGroupes(etudiants: CustomUser[], nombreGroupes: number): CustomUser[][] {
    const groupes: CustomUser[][] = [];
    const etudiantsParGroupe = Math.ceil(etudiants.length / nombreGroupes);

    for (let i = 0; i < nombreGroupes; i++) {
      groupes.push(etudiants.slice(i * etudiantsParGroupe, (i + 1) * etudiantsParGroupe));
    }

    return groupes;
  }

  // Fonction de création et enregistrement des groupes
  creerGroupes(): void {
    if (this.groupForm.valid) {
      const nombreGroupes = this.groupForm.value.nombreGroupes;
      this.groupes = this.diviserEtudiantsEnGroupes(this.etudiants, nombreGroupes);

      // Création d'une liste de sous-groupes avec IDs
      this.groupesIds = this.groupes.map((_, index) => ({
        id: index + 1
      }));

      // Sauvegarde des groupes dans un fichier JSON
      this.utilisateurService.saveGroupes(this.groupesIds).subscribe(() => {
        console.log('Les groupes ont été sauvegardés avec succès.');
      });
    }
  }
 
  

}
