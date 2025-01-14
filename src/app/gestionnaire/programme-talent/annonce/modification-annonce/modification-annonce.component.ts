import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../models/tousModel';

@Component({
  selector: 'app-modification-annonce',
  templateUrl: './modification-annonce.component.html',
  styleUrls: ['./modification-annonce.component.css']
})
export class ModificationAnnonceComponent implements OnInit{


  annonceForm!: FormGroup;
  annonceId!: number;
  // annonce: Annonce[] =[];

  constructor(
    private fb: FormBuilder,
    private annonceService: AnnonceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.annonceForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      dateCours: ['', Validators.required],
      description: ['', Validators.required],
      datePublication: ['', Validators.required],
      // heure: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.annonceId = this.route.snapshot.params['id'];
    this.loadAnnonce();
  }


  loadAnnonce(): void {
    this.annonceService.getAnnonceById(this.annonceId).subscribe((annonce: Annonce) => {
      this.annonceForm.patchValue({
          titre: annonce.titre,
          lieu: annonce.lieu,
          dateCours: annonce.dateCours,
          description: annonce.description,
          datePublication: annonce.datePublication,
          // heure: annonce.heure
        });
    });
  }

  updateModule(): void {
    if (this.annonceForm.valid) {
      const updatedAnnonce: Annonce = { id: this.annonceId, ...this.annonceForm.value };
      this.annonceService.updateAnnonce(updatedAnnonce).subscribe(() => {
        this.router.navigate(['/gestionnaire/dasbord-prog-talent']); // Redirection après modification du module
      });
    }
  }
  

}
