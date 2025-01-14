// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/tousModel';

@Component({
  selector: 'app-modification-formation',
  templateUrl: './modification-formation.component.html',
  styleUrls: ['./modification-formation.component.css']
})
export class ModificationFormationComponent implements OnInit {

  formationForm!: FormGroup;
  formationId!: number;

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // Récupérer l'ID de la formation à partir de l'URL
    this.formationId = this.route.snapshot.params['id'];
    
    this.loadFormation()
    this.initializeForm()
  }


  initializeForm(): void {
    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      type: [''],
      niveau: [''],
      prix: [0, [Validators.required, Validators.min(0)]],
      duree: ['', Validators.required],
      nombre: [null],
      location: ['', Validators.required],
      resume: [''],
      description: ['', Validators.required],
    });
  }


  loadFormation(): void {
    // Récupère la formation à partir de l'ID
    this.formationService.getFormationById(this.formationId).subscribe((formation: Formation) => {
      this.formationForm.patchValue({
        titre: formation.titre,
        type: formation.type,
        niveau: formation.niveau,
        prix: formation.prix,
        duree: formation.duree,
        nombre: formation.nombre,
        location: formation.location,
        resume: formation.resume,
        description: formation.description
      });
    });
  }

  updateFormation(): void {
    if (this.formationForm.valid) {
      const updatedFormation: Formation = { ...this.formationForm.value };
      this.formationService.updateFormation(this.formationId, updatedFormation).subscribe(() => {
        this.router.navigate([`/gestionnaire/formation`]);
      });
    }
  }
}
