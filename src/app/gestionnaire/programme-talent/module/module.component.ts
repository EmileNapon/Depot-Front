import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation, Module, Seance } from '../models/tousModel';
import { ModuleService } from '../services/module.service';
import { SeanceService } from '../services/seance.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  modules: Module[] = [];
  seances: Seance[] = [];
  formation!: Formation;

  constructor(
    private moduleService: ModuleService,
    private seanceService: SeanceService,
    private formationService: FormationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadModules();
    this.loadSeances();
  }

  loadModules(): void {
    this.moduleService.getModules().subscribe(
      (data) => {
        this.modules = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des modules:', error);
      }
    );
  }

  deleteModule(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      // Étape 1: Récupérer les séances liées au module
      const seancesDuModule = this.getSeancesByModule(id.toString());

      // Étape 2: Supprimer les séances liées au module
      seancesDuModule.forEach(seance => {
        this.seanceService.deleteSeance(seance.id).subscribe(
          () => {
            console.log(`Séance ${seance.id} supprimée`);
          },
          (error) => {
            console.error('Erreur lors de la suppression des séances:', error);
          }
        );
      });

      // Étape 3: Supprimer le module après la suppression des séances
      this.moduleService.deleteModule(id).subscribe(() => {
        this.loadModules(); // Recharger la liste après la suppression
      });
    }
  }

  // Méthode pour filtrer les séances par module
  // getSeancesByModule(moduleId: string): Seance[] {
  //   return this.seances.filter(seance => seance.module_id.toString() === moduleId.toString());
  // }

  loadSeances(): void {
    this.seanceService.getSeances().subscribe(
      (data) => {
        this.seances = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }

  deleteSeance(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.seanceService.deleteSeance(id).subscribe(() => {
        this.loadSeances(); // Recharger la liste après la suppression
      });
    }
  }

  // // Méthode pour filtrer les séances par module
  // getSeancesByModule(moduleId: number): Seance[] {
  //   return this.seances.filter(seance => seance.module_id === moduleId);
  // }

  // Méthode pour filtrer les séances par module
  getSeancesByModule(moduleId: string): Seance[] {
    return this.seances.filter(seance => seance.ModuleFormation_id.toString() === moduleId);
  }
}
