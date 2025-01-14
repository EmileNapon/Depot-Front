import { Component } from '@angular/core';
import { CustomUser } from '../models/tousModel';
import { UtilisateurService } from '../services/utilisateur.service';
import { Module } from '../models/tousModel';
import { ModuleService } from '../services/module.service';
import { ModuleFormationService } from '../services/moduleFormation.service';
import { Formation,Annonce } from '../models/tousModel';
import {FormationService} from "../services/formation.service"
import { ActivatedRoute, Router } from '@angular/router';
import { DasbordEtudiantService } from 'src/app/dasbord-etudiant/service-model/dasbord-etudiant.service';
import{SeanceService} from '../services/seance.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-dasbord-prog-talent',
  templateUrl:'./dasbord-prog-talent.component.html',
  styleUrls: ['./dasbord-prog-talent.component.css']
})
export class GestionnaireDasbordProgTalentComponent {
  showAnnonce!: boolean;
  showFormation!: boolean;
  showGroupe!: boolean;
  showListe!: boolean;
  showCalendar!: boolean;
  showExo!: boolean;
  showWebinar!: boolean;
  showAjoutModule!: boolean;

  utilisateurs: CustomUser[] = [];
  etudiants: CustomUser[] = [];
  encadrants: CustomUser[] = [];

  modules: Module[] = [];
  selectedModules: { moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module

  formations: any[] = [];
  dasbordId: any;
    
  shutDetail!: boolean;
  showDetail!: boolean;


modulesFormations:any[]=[]
FiltresmodulesFormations: any[]=[]
FiltresModules:any[]=[]
FiltresSeances:any[]=[]
seances:any[]=[]
annonceForm!: FormGroup;


formationId!:number
formationWithModules: any[]=[]

formationForm!: FormGroup;



  constructor(
    private utilisateurService: UtilisateurService,
    private moduleService: ModuleService,
    private moduleFormationService: ModuleFormationService, 
    private formationService :FormationService,
    private router: Router, private route: ActivatedRoute, private DasbordService: DasbordEtudiantService,   
    private seanceService: SeanceService,private fb: FormBuilder, 
    private annonceService: AnnonceService, 
  ) { }

  InitForm():void{
    this.annonceForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      date_cours: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  iniFormsFormation():void{


    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      // niveau: ['', Validators.required],
      // prix: [0, [Validators.required, Validators.min(0)]],
      // duree: ['', Validators.required],
      // nombre: ['', [Validators.required, Validators.min(1)]],
      // location: ['', Validators.required],
      // resume: ['', Validators.required],
      // description: ['', Validators.required]
    });
  }


///////////////////////////////////////////////////

// updateFormation(): void {
//   if (this.formationForm.valid) {
//     const updatedFormation: Formation = { id: this.formationId, ...this.formationForm.value };
//     this.formationService.updateFormation(updatedFormation).subscribe(() => {
//       console.log('|||||||||||||||||||||||||||||||||||||||||||||||------|||||||||||||||')
//     });
//   }
// }

///////////////////////////////////////////////////


  
  ngOnInit():void{
    this.dasbordId = this.route.snapshot.paramMap.get('dasbordId');
    
    this.loadFormations()
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
    this.showAjoutModule = false;

    this.loadModules();
    this.loadFormateurs();  // Charger les formateurs disponibles

    // this.utilisateurService.getEtudiants().subscribe((data: CustomUser[]) => {
    //   this.etudiants = data;
    // });

    // this.utilisateurService.getEtudiants().subscribe((data: Etudiant[]) => {
    //   this.etudiants = data;
    // });
    // this.utilisateurService.getEncadrants().subscribe((data: Encadrant[]) => {
    //   this.encadrants = data;
    // });
    this.shutDetail = true;
    this.showDetail = false;

    this.loadModulesFormations()
    this.loadModules()
    this.loadSeances()


    this.InitForm();
    this.annonceForm.patchValue({
     // date_publication: new Date(),
      //heure: new Date().getTime,
      // heure: new Date().getTime,
      
    })


    this.formationId = this.route.snapshot.params['id'];

  }

  onShowAnnonce(){
    this.showAnnonce = true;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowFormation(){
    this.showAnnonce = false;
    this.showFormation = true;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowGroupe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = true;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowListe(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = true;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowCalendar(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
  }

  onShowExo(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = true;
    this.showWebinar = false;
  }

  onShowWebinaire(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = false;
    this.showExo = false;
    this.showWebinar = true;
  }

  onAjoutModule(){
    this.showAnnonce = false;
    this.showFormation = false;
    this.showGroupe = false;
    this.showListe = false;
    this.showCalendar = true;
    this.showExo = false;
    this.showWebinar = false;
    this.showAjoutModule = true;

  }

  onShutAjoutModule(){
    this.showAjoutModule = false;
  }
  







  onShutDetail(){
    this.shutDetail = false;
    this.showDetail = true;
  }
  onShowDetail(){
    this.shutDetail = true;
    this.showDetail = false;
  }
 
getGroupes() {
  const groupes = [];
  for (let i = 0; i < this.utilisateurs.length; i += 3) {
      // Filtrer uniquement les étudiants pour former les groupes
      const etudiants = this.utilisateurs.filter(user => user.role === 'etudiant');
      
      // Ajouter les étudiants par groupes de 3
      groupes.push(etudiants.slice(i, i + 3));
  }
  return groupes;
}



// Charger les formateurs (utilisateurs avec rôle 'encadrant')
loadFormateurs(): void {
  this.utilisateurService.getFormateurs().subscribe(
    (data) => {
      this.encadrants = data;
    },
    (error) => {
      console.error('Erreur lors du chargement des formateurs:', error);
    }
  );
}

  // Méthode pour obtenir le nom d'un module à partir de son ID
  getModuleName(moduleId: number): string {
    const module = this.modules.find(m => m.id === moduleId);
    return module ? module.nom_module : 'Module inconnu';
  }
  

  // Gestion de la sélection des modules
  onModuleSelectionChange(moduleId: number, event: any): void {
    if (event.target.checked) {
      // Ajouter le module à la sélection s'il n'existe pas déjà
      if (!this.selectedModules.some(selected => selected.moduleId === moduleId)) {
        this.selectedModules.push({ moduleId, formateurIds: [] });
      }
    } else {
      // Retirer le module de la sélection si la case est décochée
      this.selectedModules = this.selectedModules.filter(selected => selected.moduleId !== moduleId);
    }
  }

  // Gestion de la sélection des formateurs pour un module
  onFormateurSelectionChange(moduleId: number, formateurId: number, event: any): void {
    const module = this.selectedModules.find(selected => selected.moduleId === moduleId);
    if (module) {
      if (event.target.checked) {
        // Ajouter le formateur sélectionné à la liste des formateurs pour ce module
        module.formateurIds.push(formateurId);
      } else {
        // Retirer le formateur s'il est désélectionné
        module.formateurIds = module.formateurIds.filter(id => id !== formateurId);
      }
    }
  }
  

  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data) => {
        this.formations = data;
        this.filterDataInscrit()

      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }

  filteredIncritsFormations:any[]=[]


  filterDataInscrit(): void {
    
    this.filteredIncritsFormations= this.formations.filter(formation => formation.id==this.dasbordId);
}



deleteFormation(id: number): void {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
    this.formationService.deleteFormation(id).subscribe(() => {
      this.router.navigate([`/gestionnaire/formation`]);
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    });
  }
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

// Supprimer module 
deleteModule( id: number): void {
  
  if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
    // Étape 1: Récupérer les séances liées au module
    const seancesDuModule = this.getSeancesByModule(id);

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
    console.log('[[[[]]]]=========================|||||||=====]', this.dasbordId)
    this.moduleFormationService.deleteModuleFormation(this.dasbordId,id).subscribe(() => {
      this.loadModules(); // Recharger la liste après la suppression
    });

  }
}





loadSeances(): void {
  this.seanceService.getSeances().subscribe(
    (data) => {
      this.seances = data;

      this.filterData1()
      
    },
    (error) => {
      console.error('Erreur lors du chargement des formations:', error);
    }
  );
}

// suppression de seances
deleteSeance(id: number): void {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
    this.seanceService.deleteSeance(id).subscribe(() => {
      this.loadSeances(); // Recharger la liste après la suppression
      console.log('sssssssssssssssssss')
    });
  }
}



filterData1(): void {
 console.log('[[[[]]]]==============================]', this.seances)
 this.FiltresmodulesFormations= this.modulesFormations.filter(moduleFormation=>moduleFormation.formation==this.dasbordId);
 this.FiltresModules= this.modules.filter(modul=>this.FiltresmodulesFormations.some(filModulFormation=>filModulFormation.module==modul.id));
 //this.FiltresSeances= this.seances.filter(seance=>this.FiltresmodulesFormations.some(filModulFormation=>filModulFormation.module==seance.module));
console.log('sssssssssssss',this.modules)
}



statuts:boolean=false
statuts2:boolean=true
// ismodify:boolean=false
isStatut():void{
  this.statuts=true
  this.statuts2=!this.statuts2
}


  // Méthode pour ajouter une nouvelle annonce
  ajouterAnnonce(): void {

 
    if (this.annonceForm.valid) {
      let newAnnonce: Annonce =this.annonceForm.value;
      console.log(this.annonceForm.value)
      this.annonceService.addAnnonce(newAnnonce).subscribe(() => {
        this.statuts=false
        this.statuts2=true
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de annonce', error); // Gérer les erreurs
        }
      );
    }
  }

//

  // onModify(annonceId: number): void {
  //   this.annonceService.getAnnonceById(this.annonceId).subscribe((annonce: Annonce) => {
  //     this.annonceForm.patchValue({
  //         titre: annonce.titre,
  //         lieu: annonce.lieu,
  //         dateCours: annonce.dateCours,
  //         description: annonce.description,
  //         datePublication: annonce.datePublication,
  //         // heure: annonce.heure
  //       });
  //   });
  // }

  // updateModule(): void {
  //   if (this.annonceForm.valid) {
  //     const updatedAnnonce: Annonce = { id: this.annonceId, ...this.annonceForm.value };
  //     this.annonceService.updateAnnonce(updatedAnnonce).subscribe(() => {
  //       this.statuts=false;
  //       this.ismodify=false;
  //     });
  //   }
  // }

  // isModify():void{
  //   this.statuts=false
  //   this.ismodify=!this.ismodify
  // }




  
  // Méthode pour filtrer les séances par module
  getSeancesByModule(moduleId: number): any[] {
    return this.seances.filter(seance => seance.module === moduleId);
  }
  
  onSelectModule( formationId :string,seanceId: string): void {
    this.router.navigate([`/gestionnaire/create/${formationId}/${seanceId}/seance`]);
  }

  
  onSelectFormation(id: string): void {
    this.router.navigate([`/gestionnaire/update/${id}/formation`]); 
  }
    

  onSelectFormationModule(id: string): void {
    this.router.navigate([`/gestionnaire/Module-formation/${id}/formation`]); 
  }


  filterModulesForFormation(formationId: number): any[] {
    // Filtre les relations ModuleFormation par formationId
    const moduleIds = this.FiltresmodulesFormations.filter(moduleFormation => moduleFormation.formation === formationId)
      .map(moduleFormation => moduleFormation.module);
  
    // Retourne les modules correspondants
    return this.modules.filter(module => moduleIds.includes(module.id));
  }


}
