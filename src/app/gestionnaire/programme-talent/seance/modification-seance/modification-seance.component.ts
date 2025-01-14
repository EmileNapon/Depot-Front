import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Seance } from '../../models/tousModel';
import { SeanceService } from '../../services/seance.service';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-modification-seance',
  templateUrl: './modification-seance.component.html',
  styleUrls: ['./modification-seance.component.css']
})
export class ModificationSeanceComponent implements OnInit{

  seanceForm: FormGroup;  
  seanceId!: number;
  modules: Module[] = [];  // Stockage des modules récupérés
  dasbordId!: string |null

  constructor(
    private fb: FormBuilder,  
    private seanceService: SeanceService,
    private moduleService: ModuleService,  
    private route: ActivatedRoute,
    private router: Router  
  ) {
    // Initialisation du formulaire réactif
    // this.seanceForm = this.fb.group({
    //   lieu: ['', [Validators.required]],  
    //   date_formation: ['', [Validators.required]], 
    //   heure_debut: ['', [Validators.required]], 
    //   heure_fin: ['', [Validators.required]],  
    //   statut: ['', [Validators.required]],  
    //   moduleFormation_id: [null, [Validators.required]]  
    // });
    this.seanceForm = this.fb.group({
      lieu: ['', [Validators.required]],  
      date_formation: ['', [Validators.required]], 
      heure_debut: ['', [Validators.required]],  // Champ "heure de début"
      heure_fin: ['', [Validators.required]],  // Champ "heure de fin"
      statut: ['', [Validators.required]],  // Valeur par défaut pour le statut
    });
  }

  ngOnInit(): void {
    // this.moduleId = +this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du module à partir de l'URL
    this.seanceId = this.route.snapshot.params['id'];
    this.dasbordId = this.route.snapshot.paramMap.get('dasbordId');
    this.loadSeance(); // Charger les données du module
    // this.moduleForm.patchValue({ formation_id: 1 });  
    // this.moduleForm.patchValue({formation_id: 2});

    // Récupérer les modules disponibles
    this.moduleService.getModules().subscribe(modules => {
      this.modules = modules;
    });

    this.loadseances()
  }

  loadSeance(): void {
    this.seanceService.getSeanceById(this.seanceId).subscribe((seance: any) => {
      this.seanceForm.patchValue({
        lieu: seance.lieu,
        date_formation: seance.date_formation,
        heure_debut: seance.heure_debut,
        heure_fin: seance.heure_fin,
        statut: seance.statut,
      });
    });
    
  }

  updateSeance(): void {
    if (this.seanceForm.valid) {
      const updatedModule: Seance = { id: this.seanceId, ...this.seanceForm.value };
      this.seanceService.updateSeance(updatedModule).subscribe(() => {
        this.router.navigate([`/gestionnaire/formation`]); // Redirection après modification du module
      });
    }
  }

  seances:any[]=[]
  loadseances(): void {
    this.seanceService.getSeances().subscribe(
      (data) => {
        this.seances = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des modules:', error);
      }
    );
  }


  onSelectProgrammeTalent(DasbordFormationId: number): void {
    this.router.navigate([`/gestionnaire/dasbord/${DasbordFormationId}/dasbord-prog-talent`]); 
  }
}
