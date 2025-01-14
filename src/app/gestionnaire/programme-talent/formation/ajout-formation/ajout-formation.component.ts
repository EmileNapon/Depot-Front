
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomUser, Formation, Module, ModuleFormation } from '../../models/tousModel';
import { FormationService } from '../../services/formation.service';
import { ModuleService } from '../../services/module.service';
import { ModuleFormationService } from '../../services/moduleFormation.service';
import { UtilisateurService } from '../../services/utilisateur.service';
// import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // imports: [ CKEditorModule ],
  // standalone: true
})
export class AjoutFormationComponent implements OnInit {
  formationForm: FormGroup;
  modules: Module[] = [];
  selectedModules: { moduleId: number, formateurIds: number[] }[] = [];  // Stocker les formateurs pour chaque module
  formateurs: CustomUser[] = [];  // Stocker les formateurs disponibles
  modulesFormations:any[]=[]



  constructor(
    private fb: FormBuilder, 
    private formationService: FormationService, 
    private moduleService: ModuleService,
    private moduleFormationService: ModuleFormationService,
    private utilisateurService: UtilisateurService,  // Pour récupérer les formateurs
    private router: Router
  ) {
    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      date:['',Validators.required],
      niveau: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      duree: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      resume: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadModules();
    this.loadFormateurs();  // Charger les formateurs disponibles
  }

  // Charger les modules disponibles
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

  // Charger les formateurs (utilisateurs avec rôle 'encadrant')
  loadFormateurs(): void {
    this.utilisateurService.getFormateurs().subscribe(
      (data) => {
        this.formateurs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des formateurs:', error);
      }
    );
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

  // Méthode pour obtenir le nom d'un module à partir de son ID
  getModuleName(moduleId: number): string {
    const module = this.modules.find(m => m.id === moduleId);
    return module ? module.nom_module : 'Module inconnu';
  }

statut:boolean=true
  
  ajouterNouvelleFormation(formationNom: any): void {
      this.formationService.addFormation(formationNom).subscribe(response => {
        
        console.log('Nouvelle matière ajoutée avec succès', response.id)
        this.router.navigate([`/gestionnaire/Module-formation/${response.id}/formation`])
      });
    } 
  
  
    onSubmit(){
      this.ajouterNouvelleFormation(this.formationForm.value)
     
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
  
}
