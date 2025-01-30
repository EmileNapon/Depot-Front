import { Component, OnInit } from '@angular/core';
import { CustomUser, Group, Module } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
import { ModuleService } from '../services/module.service';
import { AnnonceService } from '../services/annonce.service';
import { GroupeService } from '../services/groupe.service';
import { SeanceService } from '../services/seance.service';
import { ModuleFormationService } from '../services/moduleFormation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DasbordEtudiantService } from 'src/app/dasbord-etudiant/service-model/dasbord-etudiant.service';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
    selector: 'app-formateur-dashboard',
    templateUrl: './formateur-dashboard.component.html',
    styleUrls: ['./formateur-dashboard.component.css'],
    standalone: false
})
export class FormateurDashboardComponent implements OnInit {

  showAnnonce!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;

  utilisateurs: CustomUser[] = [];
  etudiants: CustomUser[] = [];
  encadrants: CustomUser[] = [];

  modules: Module[] = [];
  selectedModules: { moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module

  // -------------------
  annonces: any[] = [];
  groupes: Group[] = [];
  seances: any[] = [];
  modulesFormations:any[]=[]
  FiltresModules: Module[]=[]
  formationId!:string
  FiltresmodulesFormations:any[]=[]
  FiltresSeances: any[]=[]
  inscrits:any[]=[]
  filteredIncrits:any[]=[]

  Filtresformation:any[]=[]


  user!:number
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null, id:string | null } | null = null;


  FiltresEtudiantParFormation:any[]=[]

  constructor(
    private utilisateurService: UtilisateurService,
    private moduleService: ModuleService,
    private annonceService: AnnonceService,
    private groupeSeance: GroupeService,
    private seanceService: SeanceService,
    private moduleFormationService: ModuleFormationService,
    private router: Router,   private route: ActivatedRoute,
    private serviceAuth: AuthService, private DasbordService: DasbordEtudiantService, 
  ) { }
  
  ngOnInit():void{
    this.formationId = this.route.snapshot.params['DasbordFormationId'];

    this.userInfo = this.serviceAuth.getUserInfo();
    this.showAnnonce = true;
    // this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
    // this.showAjoutModule = false;

    this.loadModules();
   this.loadAnnonces();
    this.loadSeances();
    this.loadModulesFormations()
    this.loadModules()
      
   this.loadUser();
   this.loadInscrits()




  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowFormation(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }

  onAjoutModule(){
    this.showAnnonce = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;

  }


  // Charger les annonces à partir du service
  loadAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(data => {
      this.annonces = data;
      console.log(this.annonces)
    });
  }


loadGroupe(){
  this.groupeSeance.getGroupes().subscribe((groupes: Group[]) =>{
    this.groupes = groupes;
  });
}




loadUser(){
  this.utilisateurService.getEtudiants().subscribe((data: CustomUser[]) => {
    this.etudiants = data;   
  });
}

loadInscrits(): void {
  this.DasbordService.getInscrits().subscribe(
    (data) => { 
      this.inscrits = data;
      console.log("mmmm",this.inscrits)
      this.EtudiantParFormation()
    }
  );
} 


EtudiantParFormation(): void {
  if(this.formationId){
    this.Filtresformation= this.inscrits.filter(inscrit => inscrit.formation==this.formationId);
    this.FiltresEtudiantParFormation= this.etudiants.filter(user => this.Filtresformation.some(inscrit => inscrit.user==user.id ));
  }

}





loadModulesFormations(): void {
  
  this.moduleFormationService.getModuleFormations().subscribe(
    (data) => {
      this.modulesFormations = data;
      this.filterData()
    },
    (error) => {
      console.error('Erreur lors du chargement des modules:', error);
    }
  );
}


loadModules(): void {
  this.moduleService.getModules().subscribe(
    (data) => {
      this.modules = data;
      console.log('FiltresSeances=',this.modules)
    },
    (error) => {
      console.error('Erreur lors du chargement des modules:', error);
    }
  );
}


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


filterData(): void {
  console.log(this.formationId)
 this.FiltresmodulesFormations= this.modulesFormations.filter(moduleFormation=>moduleFormation.formation==this.formationId);
 this.FiltresModules= this.modules.filter(modul=>this.FiltresmodulesFormations.some(filModulFormation=>filModulFormation.module==modul.id));
 //this.FiltresSeances= this.seances.filter(seance=>this.FiltresmodulesFormations.some(filModulFormation=>filModulFormation.module==seance.module));

}





// getSeancesByModule(moduleId: string): Seance[] {
//   return this.seances.filter(seance => seance.moduleFormation_id.toString() === moduleId);
// }
  




}
