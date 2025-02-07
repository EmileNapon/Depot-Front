
import { Component, OnInit } from '@angular/core';
import { Formation, ModuleFormation, Module} from '../models/tousModel';
import { FormationService } from '../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleFormationService } from '../services/moduleFormation.service';
import { ModuleService } from '../services/module.service';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css'],
    standalone: false
})
export class FormationComponent implements OnInit {
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

  shutDetail: boolean=true;
  showDetail: boolean=false;
  onShutDetail( id:number){
    if(id){
      this.shutDetail = false;
      this.showDetail = true; 
    }
   
  }
  onShowDetail(){
    this.shutDetail = true;
    this.showDetail = false;
  }

  onSelectFormationDetail(FormationId: number): void {
    this.router.navigate([`/formation/${FormationId}/detail`]); 
  }
    
}