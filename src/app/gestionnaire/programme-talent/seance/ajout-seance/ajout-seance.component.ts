import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Seance } from '../../models/tousModel';
import { SeanceService } from '../../services/seance.service';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.css']
})
export class AjoutSeanceComponent {
  seanceForm!: FormGroup;  
  module!: any;
  modules: Module[] = [];  // Stockage des modules récupérés
  formationId!: number

  constructor(
    private fb: FormBuilder,  
    private seanceService: SeanceService,
    private moduleService: ModuleService,  
    private route: ActivatedRoute,
    private router: Router  
  ) {
    // Initialisation du formulaire réactif




  }

c:any
  dasbordId:any
  ngOnInit(): void {
    this.module = Number(this.route.snapshot.params['seanceId']);
    this.formationId = Number(this.route.snapshot.params['id_joutFormation']);

this.c=this.dasbordId
    this.x()
    this.seanceForm.patchValue({ module: this.module });  // Assigne l'ID du module

    // Récupérer les modules disponibles
    this.moduleService.getModules().subscribe(modules => {
    this.modules = modules;
    });
  
  }

x():void{

  this.seanceForm = this.fb.group({
    formation: this.formationId,
    module: this.module,
    lieu: ['', [Validators.required]],  
    date_formation: ['', [Validators.required]], 
    heure_debut: ['', [Validators.required]],  // Champ "heure de début"
    heure_fin: ['', [Validators.required]],  // Champ "heure de fin"
    statut: ['attente'],  // Valeur par défaut pour le statut
    });


}


  addSeance(): void {
    console.log('################################################',this.seanceForm.value)
    if (this.seanceForm.valid) {
      const newSeance: any = this.seanceForm.value;
      this.seanceService.addSeance(newSeance).subscribe(() => {
        this.router.navigate([`/gestionnaire/dasbord/${this.formationId}/dasbord-prog-talent`]); 
       
      });
    }
  }
}
