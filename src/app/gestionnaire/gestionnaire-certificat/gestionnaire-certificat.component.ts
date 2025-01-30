import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionnairesModulesServiceService } from '../gestionnaire-modules/gestionnaires-modules-service/gestionnaires-modules-service.service';

@Component({
    selector: 'app-gestionnaire-certificat',
    templateUrl: './gestionnaire-certificat.component.html',
    styleUrls: ['./gestionnaire-certificat.component.css'],
    standalone: false
})
export class GestionnaireCertificatComponent implements OnInit {

  constructor( private domaineService: GestionnairesModulesServiceService, private router: Router, private fb: FormBuilder ) { }

  selectedDomaineIndex:string=""
  __iconVoirMatiere__:boolean= false
  __addDomaine__:boolean=false

  ondelete():void{
    this.__iconVoirMatiere__=false
  }

  onEdit():void{
    this.__iconVoirMatiere__=false
  }


  onVoirMatiere():void{
    this.__iconVoirMatiere__=!this.__iconVoirMatiere__
  }


  selecterDomaine(domaine:string){
    this.__iconVoirMatiere__=true
    this.selectedDomaineIndex=domaine
      
  }

  OnAdd():void{
    this.__addDomaine__=!this.__addDomaine__
  }

  __domaines__: any[] = [];

  loadDomaines(): void {
    this.domaineService.getModule().subscribe(data => {
      this.__domaines__ = data;
    });
  }
   

  onSelectDomaine(certificatGestionnaireId: string): void {
    this.router.navigate([`/gestionnaire/${certificatGestionnaireId}/GestionnaireCertificat`]); // Redirection vers la page des matières du domaine sélectionné
  }

  DomaineForm!: FormGroup;

  InitFormDomain(): void {
    this.DomaineForm = this.fb.group({ 
      nom: '',
    });
  }

  onSubmit(){
  const domaine = this.DomaineForm.value;
  this.domaineService.addModule(domaine).subscribe(
    response => {
      console.log('domaine ajouté:', response);
    },
    error => {
      console.error('Erreur lors de l\'ajout du domaine:', error);
    }
  );
  
  this.OnAdd();
  this.loadDomaines();
 
}

ngOnInit(): void {
  this.loadDomaines();
  this.InitFormDomain()
}



}
