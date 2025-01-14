
import { Component, OnInit } from '@angular/core';
import { Formation, ModuleFormation, Module} from '../../models/tousModel';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleFormationService } from '../../services/moduleFormation.service';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit{
  
  moduleFormations: any[] = [];
  modules: any[] = [];

  formationId!: number;


  formation: any;
  module : any[]=[]
  modulesFormations: any[]=[]
 
  formationWithModules: any[]=[]
  modulefiltre:any[]=[]
  formationModulefiltre:any[]=[]

  constructor(
    private formationService: FormationService,
 

    private router: Router,
    private moduleService : ModuleService,
    private moduleFormationService  : ModuleFormationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['FormationId'];
    // this.loadModules();
    this.loadFormations();
    this.loadModules()
    this.loadModulesFormations()
  }


  loadFormations(): void {
    console.log(this.formationId)
    this.formationService.getFormationById(this.formationId).subscribe(
      (data) => {
        this.formation = data;
        //this.filterFormation();
      }
    );
  }

  // filtrerFormations:any[]=[]
/*
filterFormation(){
  this.filtrerFormations= this.formations.filter(formation=>formation.id=this.formationId)
  console.log(this.filtrerFormations,'##########///////////////////////////');
}

*/

  // loadModules(): void {
  //   this.moduleService.getModules().subscribe(
  //     (data) => {
  //       this.modules = data;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des des modules:', error);
  //     }
  //   );
  // }


  // loadModuleFormations(): void {
  //   this.moduleFormationService.getModuleFormations().subscribe(
  //     (data) => {
  //       this.moduleFormations = data; 
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des modules de formation:', error);
  //     }
  //   );
  // }

  // deleteFormation(id: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
  //     this.formationService.deleteFormation(id).subscribe(() => {
  //       this.loadFormations(); // Recharger la liste après la suppression
  //     });
  //   }
  // }








  loadModules(): void {
    this.moduleService.getModules().subscribe(data => {
      this.module = data;
      
    });
  }

  loadModulesFormations(): void {
    this.moduleFormationService.getModuleFormations().subscribe(
      (data) => {
        this.modulesFormations = data;
        this.filterModulesForFormationf()
       
      },
      (error) => {
        console.error('Erreur lors du chargement des modules:', error);
      }
    );
  }



  filterModulesForFormationf(): void {
   
    this.formationModulefiltre=this.modulesFormations.filter(moduleFormation=>moduleFormation.formation==this.formationId)
    
    
    this.modulefiltre=this.module.filter(modul=>this.formationModulefiltre.some(formationModulefiltr=>formationModulefiltr.module==modul.id))
    console.log(this.modulefiltre,';;;;;;;;;;;;;;;;')

      }

  deleteFormation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.loadFormations(); // Recharger la liste après la suppression
      });
    }
  }





  onSelectFormationDetail(FormationId: number): void {
    this.router.navigate([`/formation/${FormationId}/inscrit`]); 
  }











}
