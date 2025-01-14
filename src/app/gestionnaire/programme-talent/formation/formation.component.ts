import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/tousModel';
import { FormationService } from '../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../services/module.service';
import { ModuleFormationService } from '../services/moduleFormation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class GestionnaireFormationComponent implements OnInit {
  formations: any[] = [];


  module : any[]=[]
  modulesFormations: any[]=[]
  formationId!:number
  formationWithModules: any[]=[]

  constructor(
    private formationService: FormationService,
    private router: Router,
    private moduleService : ModuleService,
    private moduleFormationService  : ModuleFormationService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['FormationId'];
    this.loadFormations();
    this.loadModules()
    this.loadModulesFormations()
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data) => {
        this.formations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }




  loadModules(): void {
    this.moduleService.getModules().subscribe(data => {
      this.module = data;
      
      
    });
  }

  loadModulesFormations(): void {
    this.moduleFormationService.getModuleFormations().subscribe(
      (data) => {
        this.modulesFormations = data;
        
       
      },
      (error) => {
        console.error('Erreur lors du chargement des modules:', error);
      }
    );
  }



  filterModulesForFormation(formationId: number): any[] {
    // Filtre les relations ModuleFormation par formationId
    const moduleIds = this.modulesFormations.filter(moduleFormation => moduleFormation.formation === formationId)
      .map(moduleFormation => moduleFormation.module);
  
    // Retourne les modules correspondants
    return this.module.filter(module => moduleIds.includes(module.id));
  }



  deleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.loadFormations(); // Recharger la liste après la suppression
      });
    }
  }

  onSelectProgrammeTalent(DasbordFormationId: number): void {
    this.router.navigate([`/gestionnaire/dasbord/${DasbordFormationId}/dasbord-prog-talent`]); 
  }
    

}
