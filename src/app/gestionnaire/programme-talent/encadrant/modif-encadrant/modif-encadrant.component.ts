import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-modif-encadrant',
  templateUrl: './modif-encadrant.component.html',
  styleUrls: ['./modif-encadrant.component.css']
})
export class ModifEncadrantComponent {

  encadrantForm: FormGroup;
  encadrantId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.encadrantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      role: ['encadrant', Validators.required],
      specialite: ['', Validators.required],
      annee_experience: ['', [Validators.required, Validators.min(0)]],
      niveau_etudes: ['', Validators.required],
      statut: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.encadrantId = this.route.snapshot.params['id'];
    this.loadEncadrant();
    // this.encadrantForm.patchValue({role: "encadrant"});
  }

  loadEncadrant(): void {
    this.utilisateurService.getFormateurs().subscribe((encadrants) => {
      const encadrant = encadrants.find((e) => e.id === this.encadrantId);
      if (encadrant) {
        // this.encadrantForm.patchValue(encadrant);
        this.encadrantForm.patchValue({
          nom: encadrant.nom,
          prenom: encadrant.prenom,
          email: encadrant.email,
        });
      }
    });
  }

  updateEncadrant(): void {
    if (this.encadrantForm.valid) {
      this.utilisateurService.updateUser(this.encadrantId, this.encadrantForm.value).subscribe(() => {
        this.router.navigate(['/gestionnaire/dasbord-prog-talent']);
      });
    }
  }

}
