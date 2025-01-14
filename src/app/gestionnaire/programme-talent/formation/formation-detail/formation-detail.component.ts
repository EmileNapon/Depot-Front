import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation, Module, ModuleFormation } from '../../models/tousModel';
import { FormationService } from '../../services/formation.service';
import { ModuleService } from '../../services/module.service';
import { ModuleFormationService } from '../../services/moduleFormation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class GestionnaireFormationDetailComponent implements OnInit{
  formations!: Formation;
  moduleFormations: ModuleFormation[] = [];
  modules: Module[] = [];

  formationId!: number;

  constructor(
    private formationService: FormationService,
    private moduleService: ModuleService,
    private moduleFormationService: ModuleFormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['id'];
    this.loadFormations();
    this.loadModules();
  }


  loadFormations(): void {
    this.formationService.getFormationById(this.formationId).subscribe(
      (data) => {
        this.formations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }

  loadModules(): void {
    this.moduleService.getModules().subscribe(
      (data) => {
        this.modules = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des des modules:', error);
      }
    );
  }


  loadModuleFormations(): void {
    this.moduleFormationService.getModuleFormations().subscribe(
      (data) => {
        this.moduleFormations = data; 
      },
      (error) => {
        console.error('Erreur lors du chargement des modules de formation:', error);
      }
    );
  }

  deleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.router.navigate([`/gestionnaire/formation`]);
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
       
      });
    }
  }
  onSelectFormation(id: number): void {
    this.router.navigate([`/gestionnaire/update/${id}/formation`]); 
  }
    


}
